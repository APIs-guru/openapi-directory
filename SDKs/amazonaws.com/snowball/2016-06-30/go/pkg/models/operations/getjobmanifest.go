package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobManifestXAmzTargetEnum string

const (
	GetJobManifestXAmzTargetEnumAwsieSnowballJobManagementServiceGetJobManifest GetJobManifestXAmzTargetEnum = "AWSIESnowballJobManagementService.GetJobManifest"
)

type GetJobManifestHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetJobManifestXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetJobManifestRequest struct {
	Headers GetJobManifestHeaders
	Request shared.GetJobManifestRequest `request:"mediaType=application/json"`
}

type GetJobManifestResponse struct {
	ContentType              string
	GetJobManifestResult     *shared.GetJobManifestResult
	InvalidJobStateException *interface{}
	InvalidResourceException *interface{}
	StatusCode               int64
}
