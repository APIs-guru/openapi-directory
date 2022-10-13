package operations

import (
	"openapi/pkg/models/shared"
)

type ListFoldersQueryParams struct {
	ParentFolderID *string `queryParam:"style=form,explode=true,name=parent_folder_id"`
}

type ListFoldersSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type ListFoldersRequest struct {
	QueryParams ListFoldersQueryParams
	Security    ListFoldersSecurity
}

type ListFolders200ApplicationJSONFolder struct {
	ID             *string `json:"id"`
	Name           *string `json:"name"`
	ParentFolderID *string `json:"parent_folder_id"`
	Path           *string `json:"path"`
}

type ListFoldersResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Folders             []ListFolders200ApplicationJSONFolder
}
