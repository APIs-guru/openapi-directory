package operations

import (
	"openapi/pkg/models/shared"
)

type ScimDeleteUserFromOrgPathParams struct {
	Org        string `pathParam:"style=simple,explode=false,name=org"`
	ScimUserID string `pathParam:"style=simple,explode=false,name=scim_user_id"`
}

type ScimDeleteUserFromOrgRequest struct {
	PathParams ScimDeleteUserFromOrgPathParams
}

type ScimDeleteUserFromOrgResponse struct {
	ContentType string
	StatusCode  int64
	ScimError   *shared.ScimError
}
