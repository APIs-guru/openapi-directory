package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRetentionPolicyXAmzTargetEnum string

const (
	DeleteRetentionPolicyXAmzTargetEnumLogs20140328DeleteRetentionPolicy DeleteRetentionPolicyXAmzTargetEnum = "Logs_20140328.DeleteRetentionPolicy"
)

type DeleteRetentionPolicyHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRetentionPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteRetentionPolicyRequest struct {
	Headers DeleteRetentionPolicyHeaders
	Request shared.DeleteRetentionPolicyRequest `request:"mediaType=application/json"`
}

type DeleteRetentionPolicyResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	OperationAbortedException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
