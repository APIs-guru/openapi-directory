package operations

import (
	"openapi/pkg/models/shared"
)

type AddLayerVersionPermissionPathParams struct {
	LayerName     string `pathParam:"style=simple,explode=false,name=LayerName"`
	VersionNumber int64  `pathParam:"style=simple,explode=false,name=VersionNumber"`
}

type AddLayerVersionPermissionQueryParams struct {
	RevisionID *string `queryParam:"style=form,explode=true,name=RevisionId"`
}

type AddLayerVersionPermissionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AddLayerVersionPermissionRequestBody struct {
	Action         string  `json:"Action"`
	OrganizationID *string `json:"OrganizationId"`
	Principal      string  `json:"Principal"`
	StatementID    string  `json:"StatementId"`
}

type AddLayerVersionPermissionRequest struct {
	PathParams  AddLayerVersionPermissionPathParams
	QueryParams AddLayerVersionPermissionQueryParams
	Headers     AddLayerVersionPermissionHeaders
	Request     AddLayerVersionPermissionRequestBody `request:"mediaType=application/json"`
}

type AddLayerVersionPermissionResponse struct {
	AddLayerVersionPermissionResponse *shared.AddLayerVersionPermissionResponse
	ContentType                       string
	InvalidParameterValueException    *interface{}
	PolicyLengthExceededException     *interface{}
	PreconditionFailedException       *interface{}
	ResourceConflictException         *interface{}
	ResourceNotFoundException         *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
