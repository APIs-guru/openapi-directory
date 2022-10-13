package operations

import (
	"openapi/pkg/models/shared"
)

type AddPermissionPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type AddPermissionQueryParams struct {
	Qualifier *string `queryParam:"style=form,explode=true,name=Qualifier"`
}

type AddPermissionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AddPermissionRequestBody struct {
	Action           string  `json:"Action"`
	EventSourceToken *string `json:"EventSourceToken"`
	Principal        string  `json:"Principal"`
	RevisionID       *string `json:"RevisionId"`
	SourceAccount    *string `json:"SourceAccount"`
	SourceArn        *string `json:"SourceArn"`
	StatementID      string  `json:"StatementId"`
}

type AddPermissionRequest struct {
	PathParams  AddPermissionPathParams
	QueryParams AddPermissionQueryParams
	Headers     AddPermissionHeaders
	Request     AddPermissionRequestBody `request:"mediaType=application/json"`
}

type AddPermissionResponse struct {
	AddPermissionResponse          *shared.AddPermissionResponse
	ContentType                    string
	InvalidParameterValueException *interface{}
	PolicyLengthExceededException  *interface{}
	PreconditionFailedException    *interface{}
	ResourceConflictException      *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
