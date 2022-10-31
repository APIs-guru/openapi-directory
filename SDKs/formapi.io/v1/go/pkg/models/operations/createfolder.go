package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFolderCreateFolderDataFolder struct {
	Name           string  `json:"name"`
	ParentFolderID *string `json:"parent_folder_id,omitempty"`
}

type CreateFolderCreateFolderData struct {
	Folder CreateFolderCreateFolderDataFolder `json:"folder"`
}

type CreateFolderSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CreateFolderRequest struct {
	Request  CreateFolderCreateFolderData `request:"mediaType=application/json"`
	Security CreateFolderSecurity
}

type CreateFolderFolder struct {
	ID             *string `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
	ParentFolderID *string `json:"parent_folder_id,omitempty"`
	Path           *string `json:"path,omitempty"`
}

type CreateFolderResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Error               *shared.Error
	Folder              *CreateFolderFolder
}
