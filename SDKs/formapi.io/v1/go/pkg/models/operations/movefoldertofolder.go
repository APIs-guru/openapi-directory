package operations

import (
	"openapi/pkg/models/shared"
)

type MoveFolderToFolderPathParams struct {
	FolderID string `pathParam:"style=simple,explode=false,name=folder_id"`
}

type MoveFolderToFolderRequestBodyMoveFolderData struct {
	ParentFolderID *string `json:"parent_folder_id"`
}

type MoveFolderToFolderSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type MoveFolderToFolderRequest struct {
	PathParams MoveFolderToFolderPathParams
	Request    MoveFolderToFolderRequestBodyMoveFolderData `request:"mediaType=application/json"`
	Security   MoveFolderToFolderSecurity
}

type MoveFolderToFolder200ApplicationJSONFolder struct {
	ID             *string `json:"id"`
	Name           *string `json:"name"`
	ParentFolderID *string `json:"parent_folder_id"`
	Path           *string `json:"path"`
}

type MoveFolderToFolderResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Error               *shared.Error
	Folder              *MoveFolderToFolder200ApplicationJSONFolder
}
