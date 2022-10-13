package operations

import (
	"openapi/pkg/models/shared"
)

type PutMetricPolicyXAmzTargetEnum string

const (
	PutMetricPolicyXAmzTargetEnumMediaStore20170901PutMetricPolicy PutMetricPolicyXAmzTargetEnum = "MediaStore_20170901.PutMetricPolicy"
)

type PutMetricPolicyHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutMetricPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutMetricPolicyRequest struct {
	Headers PutMetricPolicyHeaders
	Request shared.PutMetricPolicyInput `request:"mediaType=application/json"`
}

type PutMetricPolicyResponse struct {
	ContainerInUseException    *interface{}
	ContainerNotFoundException *interface{}
	ContentType                string
	InternalServerError        *interface{}
	PutMetricPolicyOutput      map[string]interface{}
	StatusCode                 int64
}
