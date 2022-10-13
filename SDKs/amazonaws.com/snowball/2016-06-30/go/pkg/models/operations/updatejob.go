package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateJobXAmzTargetEnum string

const (
	UpdateJobXAmzTargetEnumAwsieSnowballJobManagementServiceUpdateJob UpdateJobXAmzTargetEnum = "AWSIESnowballJobManagementService.UpdateJob"
)

type UpdateJobHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateJobRequest struct {
	Headers UpdateJobHeaders
	Request shared.UpdateJobRequest `request:"mediaType=application/json"`
}

type UpdateJobResponse struct {
	ClusterLimitExceededException    *interface{}
	ContentType                      string
	Ec2RequestFailedException        *interface{}
	InvalidInputCombinationException *interface{}
	InvalidJobStateException         *interface{}
	InvalidResourceException         *interface{}
	KmsRequestFailedException        *interface{}
	StatusCode                       int64
	UpdateJobResult                  map[string]interface{}
}
