package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureSSHPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type ConfigureSSHQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type ConfigureSSHRequest struct {
	PathParams  ConfigureSSHPathParams
	QueryParams ConfigureSSHQueryParams
	Request     *shared.SSHConfiguration `request:"mediaType=application/json"`
}

type ConfigureSSHResponse struct {
	ContentType string
	StatusCode  int64
}
