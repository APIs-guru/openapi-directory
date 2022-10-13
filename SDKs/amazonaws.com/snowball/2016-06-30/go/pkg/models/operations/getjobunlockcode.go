package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobUnlockCodeXAmzTargetEnum string

const (
	GetJobUnlockCodeXAmzTargetEnumAwsieSnowballJobManagementServiceGetJobUnlockCode GetJobUnlockCodeXAmzTargetEnum = "AWSIESnowballJobManagementService.GetJobUnlockCode"
)

type GetJobUnlockCodeHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetJobUnlockCodeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetJobUnlockCodeRequest struct {
	Headers GetJobUnlockCodeHeaders
	Request shared.GetJobUnlockCodeRequest `request:"mediaType=application/json"`
}

type GetJobUnlockCodeResponse struct {
	ContentType              string
	GetJobUnlockCodeResult   *shared.GetJobUnlockCodeResult
	InvalidJobStateException *interface{}
	InvalidResourceException *interface{}
	StatusCode               int64
}
