package operations

type AssociateTrackerConsumerPathParams struct {
	TrackerName string `pathParam:"style=simple,explode=false,name=TrackerName"`
}

type AssociateTrackerConsumerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AssociateTrackerConsumerRequestBody struct {
	ConsumerArn string `json:"ConsumerArn"`
}

type AssociateTrackerConsumerRequest struct {
	PathParams AssociateTrackerConsumerPathParams
	Headers    AssociateTrackerConsumerHeaders
	Request    AssociateTrackerConsumerRequestBody `request:"mediaType=application/json"`
}

type AssociateTrackerConsumerResponse struct {
	AccessDeniedException            *interface{}
	AssociateTrackerConsumerResponse map[string]interface{}
	ConflictException                *interface{}
	ContentType                      string
	InternalServerException          *interface{}
	ResourceNotFoundException        *interface{}
	ServiceQuotaExceededException    *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	ValidationException              *interface{}
}
