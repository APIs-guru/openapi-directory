package operations

type UpdateDataRetentionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDataRetentionRequestBodyOperationEnum string

const (
	UpdateDataRetentionRequestBodyOperationEnumIncreaseDataRetention UpdateDataRetentionRequestBodyOperationEnum = "INCREASE_DATA_RETENTION"
	UpdateDataRetentionRequestBodyOperationEnumDecreaseDataRetention UpdateDataRetentionRequestBodyOperationEnum = "DECREASE_DATA_RETENTION"
)

type UpdateDataRetentionRequestBody struct {
	CurrentVersion             string                                      `json:"CurrentVersion"`
	DataRetentionChangeInHours int64                                       `json:"DataRetentionChangeInHours"`
	Operation                  UpdateDataRetentionRequestBodyOperationEnum `json:"Operation"`
	StreamArn                  *string                                     `json:"StreamARN,omitempty"`
	StreamName                 *string                                     `json:"StreamName,omitempty"`
}

type UpdateDataRetentionRequest struct {
	Headers UpdateDataRetentionHeaders
	Request UpdateDataRetentionRequestBody `request:"mediaType=application/json"`
}

type UpdateDataRetentionResponse struct {
	ClientLimitExceededException *interface{}
	ContentType                  string
	InvalidArgumentException     *interface{}
	NotAuthorizedException       *interface{}
	ResourceInUseException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	UpdateDataRetentionOutput    map[string]interface{}
	VersionMismatchException     *interface{}
}
