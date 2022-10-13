package operations

import (
	"openapi/pkg/models/shared"
)

type PutParameterXAmzTargetEnum string

const (
	PutParameterXAmzTargetEnumAmazonSsmPutParameter PutParameterXAmzTargetEnum = "AmazonSSM.PutParameter"
)

type PutParameterHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutParameterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutParameterRequest struct {
	Headers PutParameterHeaders
	Request shared.PutParameterRequest `request:"mediaType=application/json"`
}

type PutParameterResponse struct {
	ContentType                          string
	HierarchyLevelLimitExceededException *interface{}
	HierarchyTypeMismatchException       *interface{}
	IncompatiblePolicyException          *interface{}
	InternalServerError                  *interface{}
	InvalidAllowedPatternException       *interface{}
	InvalidKeyID                         *interface{}
	InvalidPolicyAttributeException      *interface{}
	InvalidPolicyTypeException           *interface{}
	ParameterAlreadyExists               *interface{}
	ParameterLimitExceeded               *interface{}
	ParameterMaxVersionLimitExceeded     *interface{}
	ParameterPatternMismatchException    *interface{}
	PoliciesLimitExceededException       *interface{}
	PutParameterResult                   *shared.PutParameterResult
	StatusCode                           int64
	TooManyUpdates                       *interface{}
	UnsupportedParameterType             *interface{}
}
