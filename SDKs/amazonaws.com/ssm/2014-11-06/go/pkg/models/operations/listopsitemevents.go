package operations

import (
	"openapi/pkg/models/shared"
)

type ListOpsItemEventsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListOpsItemEventsXAmzTargetEnum string

const (
	ListOpsItemEventsXAmzTargetEnumAmazonSsmListOpsItemEvents ListOpsItemEventsXAmzTargetEnum = "AmazonSSM.ListOpsItemEvents"
)

type ListOpsItemEventsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListOpsItemEventsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListOpsItemEventsRequest struct {
	QueryParams ListOpsItemEventsQueryParams
	Headers     ListOpsItemEventsHeaders
	Request     shared.ListOpsItemEventsRequest `request:"mediaType=application/json"`
}

type ListOpsItemEventsResponse struct {
	ContentType                      string
	InternalServerError              *interface{}
	ListOpsItemEventsResponse        *shared.ListOpsItemEventsResponse
	OpsItemInvalidParameterException *interface{}
	OpsItemLimitExceededException    *interface{}
	OpsItemNotFoundException         *interface{}
	StatusCode                       int64
}
