package operations

import (
	"openapi/pkg/models/shared"
)

type ScimListProvisionedIdentitiesPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ScimListProvisionedIdentitiesQueryParams struct {
	Count      *int64  `queryParam:"style=form,explode=true,name=count"`
	Filter     *string `queryParam:"style=form,explode=true,name=filter"`
	StartIndex *int64  `queryParam:"style=form,explode=true,name=startIndex"`
}

type ScimListProvisionedIdentitiesRequest struct {
	PathParams  ScimListProvisionedIdentitiesPathParams
	QueryParams ScimListProvisionedIdentitiesQueryParams
}

type ScimListProvisionedIdentitiesResponse struct {
	ContentType  string
	StatusCode   int64
	ScimError    *shared.ScimError
	ScimUserList *shared.ScimUserList
}
