package operations

import (
	"openapi/pkg/models/shared"
)

type ListCompatibleImagesXAmzTargetEnum string

const (
	ListCompatibleImagesXAmzTargetEnumAwsieSnowballJobManagementServiceListCompatibleImages ListCompatibleImagesXAmzTargetEnum = "AWSIESnowballJobManagementService.ListCompatibleImages"
)

type ListCompatibleImagesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCompatibleImagesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCompatibleImagesRequest struct {
	Headers ListCompatibleImagesHeaders
	Request shared.ListCompatibleImagesRequest `request:"mediaType=application/json"`
}

type ListCompatibleImagesResponse struct {
	ContentType                string
	Ec2RequestFailedException  *interface{}
	InvalidNextTokenException  *interface{}
	ListCompatibleImagesResult *shared.ListCompatibleImagesResult
	StatusCode                 int64
}
