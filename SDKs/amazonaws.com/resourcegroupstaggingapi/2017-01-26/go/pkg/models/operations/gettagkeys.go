package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagKeysQueryParams struct {
	PaginationToken *string `queryParam:"style=form,explode=true,name=PaginationToken"`
}

type GetTagKeysXAmzTargetEnum string

const (
	GetTagKeysXAmzTargetEnumResourceGroupsTaggingApi20170126GetTagKeys GetTagKeysXAmzTargetEnum = "ResourceGroupsTaggingAPI_20170126.GetTagKeys"
)

type GetTagKeysHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTagKeysXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetTagKeysRequest struct {
	QueryParams GetTagKeysQueryParams
	Headers     GetTagKeysHeaders
	Request     shared.GetTagKeysInput `request:"mediaType=application/json"`
}

type GetTagKeysResponse struct {
	ContentType                     string
	GetTagKeysOutput                *shared.GetTagKeysOutput
	InternalServiceException        *interface{}
	InvalidParameterException       *interface{}
	PaginationTokenExpiredException *interface{}
	StatusCode                      int64
	ThrottledException              *interface{}
}
