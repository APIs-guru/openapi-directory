package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetDomainsIDRequest struct {
	PathParams GetDomainsIDPathParams
}

type GetDomainsIDResponse struct {
	APICoreDtoDomainsDomain *shared.APICoreDtoDomainsDomain
	Body                    []byte
	ContentType             string
	StatusCode              int64
}
