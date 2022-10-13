package operations

import (
	"openapi/pkg/models/shared"
)

type ListServicesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListServicesXAmzTargetEnum string

const (
	ListServicesXAmzTargetEnumRoute53AutoNamingV20170314ListServices ListServicesXAmzTargetEnum = "Route53AutoNaming_v20170314.ListServices"
)

type ListServicesHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServicesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListServicesRequest struct {
	QueryParams ListServicesQueryParams
	Headers     ListServicesHeaders
	Request     shared.ListServicesRequest `request:"mediaType=application/json"`
}

type ListServicesResponse struct {
	ContentType          string
	InvalidInput         *interface{}
	ListServicesResponse *shared.ListServicesResponse
	StatusCode           int64
}
