package operations

import (
	"openapi/pkg/models/shared"
)

type ListDevicesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDevicesXAmzTargetEnum string

const (
	ListDevicesXAmzTargetEnumSageMakerListDevices ListDevicesXAmzTargetEnum = "SageMaker.ListDevices"
)

type ListDevicesHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDevicesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDevicesRequest struct {
	QueryParams ListDevicesQueryParams
	Headers     ListDevicesHeaders
	Request     shared.ListDevicesRequest `request:"mediaType=application/json"`
}

type ListDevicesResponse struct {
	ContentType         string
	ListDevicesResponse *shared.ListDevicesResponse
	StatusCode          int64
}
