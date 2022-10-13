package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFolderPathParams struct {
	FolderID string `pathParam:"style=simple,explode=false,name=folder_id"`
}

type DeleteFolderSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteFolderRequest struct {
	PathParams DeleteFolderPathParams
	Security   DeleteFolderSecurity
}

type DeleteFolder200ApplicationJSONFolder struct {
	ID             *string `json:"id"`
	Name           *string `json:"name"`
	ParentFolderID *string `json:"parent_folder_id"`
	Path           *string `json:"path"`
}

type DeleteFolderResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Error               *shared.Error
	Folder              *DeleteFolder200ApplicationJSONFolder
}
