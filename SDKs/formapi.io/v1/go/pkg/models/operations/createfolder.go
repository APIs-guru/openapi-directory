package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFolderRequestBodyFolder struct {
	Name           string  `json:"name"`
	ParentFolderID *string `json:"parent_folder_id,omitempty"`
}

type CreateFolderRequestBodyCreateFolderData struct {
	Folder CreateFolderRequestBodyFolder `json:"folder"`
}

type CreateFolderSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CreateFolderRequest struct {
	Request  CreateFolderRequestBodyCreateFolderData `request:"mediaType=application/json"`
	Security CreateFolderSecurity
}

type CreateFolder200ApplicationJSONFolder struct {
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
	Folder              *CreateFolder200ApplicationJSONFolder
}
