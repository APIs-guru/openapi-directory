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

type ListFoldersFolder struct {
	ID             *string `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
	ParentFolderID *string `json:"parent_folder_id,omitempty"`
	Path           *string `json:"path,omitempty"`
}

type ListFoldersRequest struct {
	QueryParams ListFoldersQueryParams
	Security    ListFoldersSecurity
}

type ListFoldersResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Folders             []ListFoldersFolder
}
