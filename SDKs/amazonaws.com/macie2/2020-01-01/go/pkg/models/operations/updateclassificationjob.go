package operations

type UpdateClassificationJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type UpdateClassificationJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateClassificationJobRequestBodyJobStatusEnum string

const (
	UpdateClassificationJobRequestBodyJobStatusEnumRunning    UpdateClassificationJobRequestBodyJobStatusEnum = "RUNNING"
	UpdateClassificationJobRequestBodyJobStatusEnumPaused     UpdateClassificationJobRequestBodyJobStatusEnum = "PAUSED"
	UpdateClassificationJobRequestBodyJobStatusEnumCancelled  UpdateClassificationJobRequestBodyJobStatusEnum = "CANCELLED"
	UpdateClassificationJobRequestBodyJobStatusEnumComplete   UpdateClassificationJobRequestBodyJobStatusEnum = "COMPLETE"
	UpdateClassificationJobRequestBodyJobStatusEnumIdle       UpdateClassificationJobRequestBodyJobStatusEnum = "IDLE"
	UpdateClassificationJobRequestBodyJobStatusEnumUserPaused UpdateClassificationJobRequestBodyJobStatusEnum = "USER_PAUSED"
)

type UpdateClassificationJobRequestBody struct {
	JobStatus UpdateClassificationJobRequestBodyJobStatusEnum `json:"jobStatus"`
}

type UpdateClassificationJobRequest struct {
	PathParams UpdateClassificationJobPathParams
	Headers    UpdateClassificationJobHeaders
	Request    UpdateClassificationJobRequestBody `request:"mediaType=application/json"`
}

type UpdateClassificationJobResponse struct {
	AccessDeniedException           *interface{}
	ConflictException               *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	ServiceQuotaExceededException   *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	UpdateClassificationJobResponse map[string]interface{}
	ValidationException             *interface{}
}
