package operations

import (
	"openapi/pkg/models/shared"
)

type RenameFolderPathParams struct {
	FolderID string `pathParam:"style=simple,explode=false,name=folder_id"`
}

type RenameFolderRequestBodyRenameFolderData struct {
	Name string `json:"name"`
}

type RenameFolderSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type RenameFolderRequest struct {
	PathParams RenameFolderPathParams
	Request    RenameFolderRequestBodyRenameFolderData `request:"mediaType=application/json"`
	Security   RenameFolderSecurity
}

type RenameFolderResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
}
