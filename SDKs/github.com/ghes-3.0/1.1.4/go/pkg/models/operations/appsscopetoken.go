package operations

import (
	"openapi/pkg/models/shared"
)

type AppsScopeTokenPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
}

type AppsScopeTokenRequestBody struct {
	AccessToken   string                 `json:"access_token"`
	Permissions   *shared.AppPermissions `json:"permissions"`
	Repositories  []string               `json:"repositories"`
	RepositoryIds []int64                `json:"repository_ids"`
	Target        *string                `json:"target"`
	TargetID      *int64                 `json:"target_id"`
}

type AppsScopeTokenRequest struct {
	PathParams AppsScopeTokenPathParams
	Request    *AppsScopeTokenRequestBody `request:"mediaType=application/json"`
}

type AppsScopeTokenResponse struct {
	ContentType     string
	StatusCode      int64
	Authorization   *shared.Authorization
	BasicError      *shared.BasicError
	ValidationError *shared.ValidationError
}
