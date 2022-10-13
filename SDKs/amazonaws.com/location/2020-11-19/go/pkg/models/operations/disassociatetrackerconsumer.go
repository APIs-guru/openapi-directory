package operations

type DisassociateTrackerConsumerPathParams struct {
	ConsumerArn string `pathParam:"style=simple,explode=false,name=ConsumerArn"`
	TrackerName string `pathParam:"style=simple,explode=false,name=TrackerName"`
}

type DisassociateTrackerConsumerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisassociateTrackerConsumerRequest struct {
	PathParams DisassociateTrackerConsumerPathParams
	Headers    DisassociateTrackerConsumerHeaders
}

type DisassociateTrackerConsumerResponse struct {
	AccessDeniedException               *interface{}
	ContentType                         string
	DisassociateTrackerConsumerResponse map[string]interface{}
	InternalServerException             *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
	ValidationException                 *interface{}
}
