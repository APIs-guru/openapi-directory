package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMetricPolicyXAmzTargetEnum string

const (
	DeleteMetricPolicyXAmzTargetEnumMediaStore20170901DeleteMetricPolicy DeleteMetricPolicyXAmzTargetEnum = "MediaStore_20170901.DeleteMetricPolicy"
)

type DeleteMetricPolicyHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteMetricPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteMetricPolicyRequest struct {
	Headers DeleteMetricPolicyHeaders
	Request shared.DeleteMetricPolicyInput `request:"mediaType=application/json"`
}

type DeleteMetricPolicyResponse struct {
	ContainerInUseException    *interface{}
	ContainerNotFoundException *interface{}
	ContentType                string
	DeleteMetricPolicyOutput   map[string]interface{}
	InternalServerError        *interface{}
	PolicyNotFoundException    *interface{}
	StatusCode                 int64
}
