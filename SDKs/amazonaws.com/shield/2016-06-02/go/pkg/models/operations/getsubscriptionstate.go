package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionStateXAmzTargetEnum string

const (
	GetSubscriptionStateXAmzTargetEnumAwsShield20160616GetSubscriptionState GetSubscriptionStateXAmzTargetEnum = "AWSShield_20160616.GetSubscriptionState"
)

type GetSubscriptionStateHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSubscriptionStateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSubscriptionStateRequest struct {
	Headers GetSubscriptionStateHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetSubscriptionStateResponse struct {
	ContentType                  string
	GetSubscriptionStateResponse *shared.GetSubscriptionStateResponse
	InternalErrorException       *interface{}
	StatusCode                   int64
}
