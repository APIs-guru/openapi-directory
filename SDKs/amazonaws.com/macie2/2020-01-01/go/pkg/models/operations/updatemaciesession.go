package operations

type UpdateMacieSessionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum string

const (
	UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnumFifteenMinutes UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum = "FIFTEEN_MINUTES"
	UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnumOneHour        UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum = "ONE_HOUR"
	UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnumSixHours       UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum = "SIX_HOURS"
)

type UpdateMacieSessionRequestBodyStatusEnum string

const (
	UpdateMacieSessionRequestBodyStatusEnumPaused  UpdateMacieSessionRequestBodyStatusEnum = "PAUSED"
	UpdateMacieSessionRequestBodyStatusEnumEnabled UpdateMacieSessionRequestBodyStatusEnum = "ENABLED"
)

type UpdateMacieSessionRequestBody struct {
	FindingPublishingFrequency *UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum `json:"findingPublishingFrequency,omitempty"`
	Status                     *UpdateMacieSessionRequestBodyStatusEnum                     `json:"status,omitempty"`
}

type UpdateMacieSessionRequest struct {
	Headers UpdateMacieSessionHeaders
	Request UpdateMacieSessionRequestBody `request:"mediaType=application/json"`
}

type UpdateMacieSessionResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateMacieSessionResponse    map[string]interface{}
	ValidationException           *interface{}
}
