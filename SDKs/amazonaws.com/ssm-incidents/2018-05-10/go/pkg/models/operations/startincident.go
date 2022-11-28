package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type StartIncidentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// StartIncidentRequestBodyTriggerDetails
// Details about what caused the incident to be created in Incident Manager.
type StartIncidentRequestBodyTriggerDetails struct {
	RawData    *string    `json:"rawData,omitempty"`
	Source     *string    `json:"source,omitempty"`
	Timestamp  *time.Time `json:"timestamp,omitempty"`
	TriggerArn *string    `json:"triggerArn,omitempty"`
}

type StartIncidentRequestBody struct {
	ClientToken     *string                                 `json:"clientToken,omitempty"`
	Impact          *int64                                  `json:"impact,omitempty"`
	RelatedItems    []shared.RelatedItem                    `json:"relatedItems,omitempty"`
	ResponsePlanArn string                                  `json:"responsePlanArn"`
	Title           *string                                 `json:"title,omitempty"`
	TriggerDetails  *StartIncidentRequestBodyTriggerDetails `json:"triggerDetails,omitempty"`
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
