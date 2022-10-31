package operations

import (
	"openapi/pkg/models/shared"
)

type InvokePathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type InvokeQueryParams struct {
	Qualifier *string `queryParam:"style=form,explode=true,name=Qualifier"`
}

type InvokeXAmzInvocationTypeEnum string

const (
	InvokeXAmzInvocationTypeEnumEvent           InvokeXAmzInvocationTypeEnum = "Event"
	InvokeXAmzInvocationTypeEnumRequestResponse InvokeXAmzInvocationTypeEnum = "RequestResponse"
	InvokeXAmzInvocationTypeEnumDryRun          InvokeXAmzInvocationTypeEnum = "DryRun"
)

type InvokeXAmzLogTypeEnum string

const (
	InvokeXAmzLogTypeEnumNone InvokeXAmzLogTypeEnum = "None"
	InvokeXAmzLogTypeEnumTail InvokeXAmzLogTypeEnum = "Tail"
)

type InvokeHeaders struct {
	XAmzAlgorithm      *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzClientContext  *string                       `header:"style=simple,explode=false,name=X-Amz-Client-Context"`
	XAmzContentSha256  *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential     *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate           *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzInvocationType *InvokeXAmzInvocationTypeEnum `header:"style=simple,explode=false,name=X-Amz-Invocation-Type"`
	XAmzLogType        *InvokeXAmzLogTypeEnum        `header:"style=simple,explode=false,name=X-Amz-Log-Type"`
	XAmzSecurityToken  *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature      *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders  *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type InvokeRequestBody struct {
	Payload *string `json:"Payload,omitempty"`
}

type InvokeRequest struct {
	PathParams  InvokePathParams
	QueryParams InvokeQueryParams
	Headers     InvokeHeaders
	Request     InvokeRequestBody `request:"mediaType=application/json"`
}

type InvokeResponse struct {
	ContentType                          string
	Ec2AccessDeniedException             *interface{}
	Ec2ThrottledException                *interface{}
	Ec2UnexpectedException               *interface{}
	EfsioException                       *interface{}
	EfsMountConnectivityException        *interface{}
	EfsMountFailureException             *interface{}
	EfsMountTimeoutException             *interface{}
	EniLimitReachedException             *interface{}
	InvalidParameterValueException       *interface{}
	InvalidRequestContentException       *interface{}
	InvalidRuntimeException              *interface{}
	InvalidSecurityGroupIDException      *interface{}
	InvalidSubnetIDException             *interface{}
	InvalidZipFileException              *interface{}
	InvocationResponse                   *shared.InvocationResponse
	KmsAccessDeniedException             *interface{}
	KmsDisabledException                 *interface{}
	KmsInvalidStateException             *interface{}
	KmsNotFoundException                 *interface{}
	RequestTooLargeException             *interface{}
	ResourceConflictException            *interface{}
	ResourceNotFoundException            *interface{}
	ResourceNotReadyException            *interface{}
	ServiceException                     *interface{}
	StatusCode                           int64
	SubnetIPAddressLimitReachedException *interface{}
	TooManyRequestsException             *interface{}
	UnsupportedMediaTypeException        *interface{}
}
