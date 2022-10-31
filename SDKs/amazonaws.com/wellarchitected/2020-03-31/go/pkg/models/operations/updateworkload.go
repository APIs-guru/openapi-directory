package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWorkloadPathParams struct {
	WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
}

type UpdateWorkloadHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateWorkloadRequestBodyEnvironmentEnum string

const (
	UpdateWorkloadRequestBodyEnvironmentEnumProduction    UpdateWorkloadRequestBodyEnvironmentEnum = "PRODUCTION"
	UpdateWorkloadRequestBodyEnvironmentEnumPreproduction UpdateWorkloadRequestBodyEnvironmentEnum = "PREPRODUCTION"
)

type UpdateWorkloadRequestBodyImprovementStatusEnum string

const (
	UpdateWorkloadRequestBodyImprovementStatusEnumNotApplicable    UpdateWorkloadRequestBodyImprovementStatusEnum = "NOT_APPLICABLE"
	UpdateWorkloadRequestBodyImprovementStatusEnumNotStarted       UpdateWorkloadRequestBodyImprovementStatusEnum = "NOT_STARTED"
	UpdateWorkloadRequestBodyImprovementStatusEnumInProgress       UpdateWorkloadRequestBodyImprovementStatusEnum = "IN_PROGRESS"
	UpdateWorkloadRequestBodyImprovementStatusEnumComplete         UpdateWorkloadRequestBodyImprovementStatusEnum = "COMPLETE"
	UpdateWorkloadRequestBodyImprovementStatusEnumRiskAcknowledged UpdateWorkloadRequestBodyImprovementStatusEnum = "RISK_ACKNOWLEDGED"
)

type UpdateWorkloadRequestBody struct {
	AccountIds                      []string                                        `json:"AccountIds,omitempty"`
	ArchitecturalDesign             *string                                         `json:"ArchitecturalDesign,omitempty"`
	AwsRegions                      []string                                        `json:"AwsRegions,omitempty"`
	Description                     *string                                         `json:"Description,omitempty"`
	Environment                     *UpdateWorkloadRequestBodyEnvironmentEnum       `json:"Environment,omitempty"`
	ImprovementStatus               *UpdateWorkloadRequestBodyImprovementStatusEnum `json:"ImprovementStatus,omitempty"`
	Industry                        *string                                         `json:"Industry,omitempty"`
	IndustryType                    *string                                         `json:"IndustryType,omitempty"`
	IsReviewOwnerUpdateAcknowledged *bool                                           `json:"IsReviewOwnerUpdateAcknowledged,omitempty"`
	NonAwsRegions                   []string                                        `json:"NonAwsRegions,omitempty"`
	Notes                           *string                                         `json:"Notes,omitempty"`
	PillarPriorities                []string                                        `json:"PillarPriorities,omitempty"`
	ReviewOwner                     *string                                         `json:"ReviewOwner,omitempty"`
	WorkloadName                    *string                                         `json:"WorkloadName,omitempty"`
}

type UpdateWorkloadRequest struct {
	PathParams UpdateWorkloadPathParams
	Headers    UpdateWorkloadHeaders
	Request    UpdateWorkloadRequestBody `request:"mediaType=application/json"`
}

type UpdateWorkloadResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateWorkloadOutput      *shared.UpdateWorkloadOutput
	ValidationException       *interface{}
}
