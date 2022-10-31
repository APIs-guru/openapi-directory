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
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListOpsMetadataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
