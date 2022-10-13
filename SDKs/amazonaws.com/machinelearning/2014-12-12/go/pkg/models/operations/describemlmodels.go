package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMlModelsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeMlModelsXAmzTargetEnum string

const (
	DescribeMlModelsXAmzTargetEnumAmazonMl20141212DescribeMlModels DescribeMlModelsXAmzTargetEnum = "AmazonML_20141212.DescribeMLModels"
)

type DescribeMlModelsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMlModelsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeMlModelsRequest struct {
	QueryParams DescribeMlModelsQueryParams
	Headers     DescribeMlModelsHeaders
	Request     shared.DescribeMlModelsInput `request:"mediaType=application/json"`
}

type DescribeMlModelsResponse struct {
	ContentType             string
	DescribeMlModelsOutput  *shared.DescribeMlModelsOutput
	InternalServerException *interface{}
	InvalidInputException   *interface{}
	StatusCode              int64
}
