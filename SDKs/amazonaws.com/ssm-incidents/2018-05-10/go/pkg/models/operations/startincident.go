package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type StartIncidentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartIncidentRequestBodyTriggerDetails struct {
	RawData    *string    `json:"rawData"`
	Source     *string    `json:"source"`
	Timestamp  *time.Time `json:"timestamp"`
	TriggerArn *string    `json:"triggerArn"`
}

type StartIncidentRequestBody struct {
	ClientToken     *string                                 `json:"clientToken"`
	Impact          *int64                                  `json:"impact"`
	RelatedItems    []shared.RelatedItem                    `json:"relatedItems"`
	ResponsePlanArn string                                  `json:"responsePlanArn"`
	Title           *string                                 `json:"title"`
	TriggerDetails  *StartIncidentRequestBodyTriggerDetails `json:"triggerDetails"`
}

type StartIncidentRequest struct {
	Headers StartIncidentHeaders
	Request StartIncidentRequestBody `request:"mediaType=application/json"`
}

type StartIncidentResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StartIncidentOutput       *shared.StartIncidentOutput
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
