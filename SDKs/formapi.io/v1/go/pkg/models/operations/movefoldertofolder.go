package operations

import (
	"openapi/pkg/models/shared"
)

type MoveFolderToFolderPathParams struct {
	FolderID string `pathParam:"style=simple,explode=false,name=folder_id"`
}

type MoveFolderToFolderMoveFolderData struct {
	ParentFolderID *string `json:"parent_folder_id,omitempty"`
}

type MoveFolderToFolderSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type MoveFolderToFolderRequest struct {
	PathParams MoveFolderToFolderPathParams
	Request    MoveFolderToFolderMoveFolderData `request:"mediaType=application/json"`
	Security   MoveFolderToFolderSecurity
}

type MoveFolderToFolderFolder struct {
	ID             *string `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
	ParentFolderID *string `json:"parent_folder_id,omitempty"`
	Path           *string `json:"path,omitempty"`
}

type MoveFolderToFolderResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Error               *shared.Error
	Folder              *MoveFolderToFolderFolder
}
