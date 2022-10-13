package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWorkloadPathParams struct {
	WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
}

type UpdateWorkloadHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
	AccountIds                      []string                                        `json:"AccountIds"`
	ArchitecturalDesign             *string                                         `json:"ArchitecturalDesign"`
	AwsRegions                      []string                                        `json:"AwsRegions"`
	Description                     *string                                         `json:"Description"`
	Environment                     *UpdateWorkloadRequestBodyEnvironmentEnum       `json:"Environment"`
	ImprovementStatus               *UpdateWorkloadRequestBodyImprovementStatusEnum `json:"ImprovementStatus"`
	Industry                        *string                                         `json:"Industry"`
	IndustryType                    *string                                         `json:"IndustryType"`
	IsReviewOwnerUpdateAcknowledged *bool                                           `json:"IsReviewOwnerUpdateAcknowledged"`
	NonAwsRegions                   []string                                        `json:"NonAwsRegions"`
	Notes                           *string                                         `json:"Notes"`
	PillarPriorities                []string                                        `json:"PillarPriorities"`
	ReviewOwner                     *string                                         `json:"ReviewOwner"`
	WorkloadName                    *string                                         `json:"WorkloadName"`
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
