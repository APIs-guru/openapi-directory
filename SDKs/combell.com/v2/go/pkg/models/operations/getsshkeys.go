package operations

import (
	"openapi/pkg/models/shared"
)

type GetSSHKeysPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type GetSSHKeysQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type GetSSHKeysRequest struct {
	PathParams  GetSSHKeysPathParams
	QueryParams GetSSHKeysQueryParams
}

type GetSSHKeysResponse struct {
	ContentType string
	SSHKeys     []shared.SSHKey
	StatusCode  int64
}
