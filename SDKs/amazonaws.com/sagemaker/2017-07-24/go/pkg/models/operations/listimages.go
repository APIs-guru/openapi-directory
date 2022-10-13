package operations

import (
	"openapi/pkg/models/shared"
)

type ListImagesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListImagesXAmzTargetEnum string

const (
	ListImagesXAmzTargetEnumSageMakerListImages ListImagesXAmzTargetEnum = "SageMaker.ListImages"
)

type ListImagesHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListImagesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListImagesRequest struct {
	QueryParams ListImagesQueryParams
	Headers     ListImagesHeaders
	Request     shared.ListImagesRequest `request:"mediaType=application/json"`
}

type ListImagesResponse struct {
	ContentType        string
	ListImagesResponse *shared.ListImagesResponse
	StatusCode         int64
}
