package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobManifestXAmzTargetEnum string

const (
	GetJobManifestXAmzTargetEnumAwsieSnowballJobManagementServiceGetJobManifest GetJobManifestXAmzTargetEnum = "AWSIESnowballJobManagementService.GetJobManifest"
)

type GetJobManifestHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetJobManifestXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
