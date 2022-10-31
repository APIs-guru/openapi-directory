package operations

import (
	"openapi/pkg/models/shared"
)

type ListDeviceFleetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDeviceFleetsXAmzTargetEnum string

const (
	ListDeviceFleetsXAmzTargetEnumSageMakerListDeviceFleets ListDeviceFleetsXAmzTargetEnum = "SageMaker.ListDeviceFleets"
)

type ListDeviceFleetsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDeviceFleetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListDeviceFleetsRequest struct {
	QueryParams ListDeviceFleetsQueryParams
	Headers     ListDeviceFleetsHeaders
	Request     shared.ListDeviceFleetsRequest `request:"mediaType=application/json"`
}

type ListDeviceFleetsResponse struct {
	ContentType              string
	ListDeviceFleetsResponse *shared.ListDeviceFleetsResponse
	StatusCode               int64
}
