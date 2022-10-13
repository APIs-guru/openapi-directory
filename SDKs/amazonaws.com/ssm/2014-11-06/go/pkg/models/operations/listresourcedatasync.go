package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourceDataSyncQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListResourceDataSyncXAmzTargetEnum string

const (
	ListResourceDataSyncXAmzTargetEnumAmazonSsmListResourceDataSync ListResourceDataSyncXAmzTargetEnum = "AmazonSSM.ListResourceDataSync"
)

type ListResourceDataSyncHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListResourceDataSyncXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListResourceDataSyncRequest struct {
	QueryParams ListResourceDataSyncQueryParams
	Headers     ListResourceDataSyncHeaders
	Request     shared.ListResourceDataSyncRequest `request:"mediaType=application/json"`
}

type ListResourceDataSyncResponse struct {
	ContentType                                   string
	InternalServerError                           *interface{}
	InvalidNextToken                              *interface{}
	ListResourceDataSyncResult                    *shared.ListResourceDataSyncResult
	ResourceDataSyncInvalidConfigurationException *interface{}
	StatusCode                                    int64
}
