package operations

type PutFeedbackHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback struct {
	AnomalyGroupID *string `json:"AnomalyGroupId"`
	IsAnomaly      *bool   `json:"IsAnomaly"`
	TimeSeriesID   *string `json:"TimeSeriesId"`
}

type PutFeedbackRequestBody struct {
	AnomalyDetectorArn             string                                               `json:"AnomalyDetectorArn"`
	AnomalyGroupTimeSeriesFeedback PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback `json:"AnomalyGroupTimeSeriesFeedback"`
}

type PutFeedbackRequest struct {
	Headers PutFeedbackHeaders
	Request PutFeedbackRequestBody `request:"mediaType=application/json"`
}

type PutFeedbackResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	PutFeedbackResponse       map[string]interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	ValidationException       *interface{}
}
