package operations

type PutFeedbackHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback struct {
	AnomalyGroupID *string `json:"AnomalyGroupId,omitempty"`
	IsAnomaly      *bool   `json:"IsAnomaly,omitempty"`
	TimeSeriesID   *string `json:"TimeSeriesId,omitempty"`
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
