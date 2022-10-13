package operations

import (
	"openapi/pkg/models/shared"
)

type CancelJobXAmzTargetEnum string

const (
	CancelJobXAmzTargetEnumAwsieSnowballJobManagementServiceCancelJob CancelJobXAmzTargetEnum = "AWSIESnowballJobManagementService.CancelJob"
)

type CancelJobHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelJobRequest struct {
	Headers CancelJobHeaders
	Request shared.CancelJobRequest `request:"mediaType=application/json"`
}

type CancelJobResponse struct {
	CancelJobResult           map[string]interface{}
	ContentType               string
	InvalidJobStateException  *interface{}
	InvalidResourceException  *interface{}
	KmsRequestFailedException *interface{}
	StatusCode                int64
}
