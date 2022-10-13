package operations

type EnableMacieHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type EnableMacieRequestBodyFindingPublishingFrequencyEnum string

const (
	EnableMacieRequestBodyFindingPublishingFrequencyEnumFifteenMinutes EnableMacieRequestBodyFindingPublishingFrequencyEnum = "FIFTEEN_MINUTES"
	EnableMacieRequestBodyFindingPublishingFrequencyEnumOneHour        EnableMacieRequestBodyFindingPublishingFrequencyEnum = "ONE_HOUR"
	EnableMacieRequestBodyFindingPublishingFrequencyEnumSixHours       EnableMacieRequestBodyFindingPublishingFrequencyEnum = "SIX_HOURS"
)

type EnableMacieRequestBodyStatusEnum string

const (
	EnableMacieRequestBodyStatusEnumPaused  EnableMacieRequestBodyStatusEnum = "PAUSED"
	EnableMacieRequestBodyStatusEnumEnabled EnableMacieRequestBodyStatusEnum = "ENABLED"
)

type EnableMacieRequestBody struct {
	ClientToken                *string                                               `json:"clientToken"`
	FindingPublishingFrequency *EnableMacieRequestBodyFindingPublishingFrequencyEnum `json:"findingPublishingFrequency"`
	Status                     *EnableMacieRequestBodyStatusEnum                     `json:"status"`
}

type EnableMacieRequest struct {
	Headers EnableMacieHeaders
	Request EnableMacieRequestBody `request:"mediaType=application/json"`
}

type EnableMacieResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	EnableMacieResponse           map[string]interface{}
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
