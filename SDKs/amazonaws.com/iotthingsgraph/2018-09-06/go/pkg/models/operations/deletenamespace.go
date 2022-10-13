package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNamespaceXAmzTargetEnum string

const (
	DeleteNamespaceXAmzTargetEnumIotThingsGraphFrontEndServiceDeleteNamespace DeleteNamespaceXAmzTargetEnum = "IotThingsGraphFrontEndService.DeleteNamespace"
)

type DeleteNamespaceHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteNamespaceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteNamespaceRequest struct {
	Headers DeleteNamespaceHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DeleteNamespaceResponse struct {
	ContentType              string
	DeleteNamespaceResponse  *shared.DeleteNamespaceResponse
	InternalFailureException *interface{}
	StatusCode               int64
	ThrottlingException      *interface{}
}
