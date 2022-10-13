package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagValuesQueryParams struct {
	PaginationToken *string `queryParam:"style=form,explode=true,name=PaginationToken"`
}

type GetTagValuesXAmzTargetEnum string

const (
	GetTagValuesXAmzTargetEnumResourceGroupsTaggingApi20170126GetTagValues GetTagValuesXAmzTargetEnum = "ResourceGroupsTaggingAPI_20170126.GetTagValues"
)

type GetTagValuesHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTagValuesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetTagValuesRequest struct {
	QueryParams GetTagValuesQueryParams
	Headers     GetTagValuesHeaders
	Request     shared.GetTagValuesInput `request:"mediaType=application/json"`
}

type GetTagValuesResponse struct {
	ContentType                     string
	GetTagValuesOutput              *shared.GetTagValuesOutput
	InternalServiceException        *interface{}
	InvalidParameterException       *interface{}
	PaginationTokenExpiredException *interface{}
	StatusCode                      int64
	ThrottledException              *interface{}
}
