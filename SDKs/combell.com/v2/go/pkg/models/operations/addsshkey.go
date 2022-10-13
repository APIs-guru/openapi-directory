package operations

import (
	"openapi/pkg/models/shared"
)

type AddSSHKeyPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type AddSSHKeyQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type AddSSHKeyRequest struct {
	PathParams  AddSSHKeyPathParams
	QueryParams AddSSHKeyQueryParams
	Request     *shared.AddSSHKeyRequest `request:"mediaType=application/json"`
}

type AddSSHKeyResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
