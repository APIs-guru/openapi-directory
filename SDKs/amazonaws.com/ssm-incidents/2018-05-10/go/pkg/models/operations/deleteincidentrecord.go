package operations

type DeleteIncidentRecordHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteIncidentRecordRequestBody struct {
	Arn string `json:"arn"`
}

type DeleteIncidentRecordRequest struct {
	Headers DeleteIncidentRecordHeaders
	Request DeleteIncidentRecordRequestBody `request:"mediaType=application/json"`
}

type DeleteIncidentRecordResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	DeleteIncidentRecordOutput map[string]interface{}
	InternalServerException    *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
