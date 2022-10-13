package operations

import (
	"openapi/pkg/models/shared"
)

type ListOpsMetadataQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListOpsMetadataXAmzTargetEnum string

const (
	ListOpsMetadataXAmzTargetEnumAmazonSsmListOpsMetadata ListOpsMetadataXAmzTargetEnum = "AmazonSSM.ListOpsMetadata"
)

type ListOpsMetadataHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListOpsMetadataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListOpsMetadataRequest struct {
	QueryParams ListOpsMetadataQueryParams
	Headers     ListOpsMetadataHeaders
	Request     shared.ListOpsMetadataRequest `request:"mediaType=application/json"`
}

type ListOpsMetadataResponse struct {
	ContentType                         string
	InternalServerError                 *interface{}
	ListOpsMetadataResult               *shared.ListOpsMetadataResult
	OpsMetadataInvalidArgumentException *interface{}
	StatusCode                          int64
}
