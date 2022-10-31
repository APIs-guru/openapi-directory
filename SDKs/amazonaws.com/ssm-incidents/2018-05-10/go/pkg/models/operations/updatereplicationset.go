package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateReplicationSetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateReplicationSetRequestBody struct {
	Actions     []shared.UpdateReplicationSetAction `json:"actions"`
	Arn         string                              `json:"arn"`
	ClientToken *string                             `json:"clientToken,omitempty"`
}

type UpdateReplicationSetRequest struct {
	Headers UpdateReplicationSetHeaders
	Request UpdateReplicationSetRequestBody `request:"mediaType=application/json"`
}

type UpdateReplicationSetResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	UpdateReplicationSetOutput map[string]interface{}
	ValidationException        *interface{}
}
