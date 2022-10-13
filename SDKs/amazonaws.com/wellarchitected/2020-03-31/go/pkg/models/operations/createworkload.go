package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkloadHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateWorkloadRequestBodyEnvironmentEnum string

const (
	CreateWorkloadRequestBodyEnvironmentEnumProduction    CreateWorkloadRequestBodyEnvironmentEnum = "PRODUCTION"
	CreateWorkloadRequestBodyEnvironmentEnumPreproduction CreateWorkloadRequestBodyEnvironmentEnum = "PREPRODUCTION"
)

type CreateWorkloadRequestBody struct {
	AccountIds          []string                                 `json:"AccountIds"`
	ArchitecturalDesign *string                                  `json:"ArchitecturalDesign"`
	AwsRegions          []string                                 `json:"AwsRegions"`
	ClientRequestToken  string                                   `json:"ClientRequestToken"`
	Description         string                                   `json:"Description"`
	Environment         CreateWorkloadRequestBodyEnvironmentEnum `json:"Environment"`
	Industry            *string                                  `json:"Industry"`
	IndustryType        *string                                  `json:"IndustryType"`
	Lenses              []string                                 `json:"Lenses"`
	NonAwsRegions       []string                                 `json:"NonAwsRegions"`
	Notes               *string                                  `json:"Notes"`
	PillarPriorities    []string                                 `json:"PillarPriorities"`
	ReviewOwner         string                                   `json:"ReviewOwner"`
	Tags                map[string]string                        `json:"Tags"`
	WorkloadName        string                                   `json:"WorkloadName"`
}

type CreateWorkloadRequest struct {
	Headers CreateWorkloadHeaders
	Request CreateWorkloadRequestBody `request:"mediaType=application/json"`
}

type CreateWorkloadResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateWorkloadOutput          *shared.CreateWorkloadOutput
	InternalServerException       *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
