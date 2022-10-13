package operations

type DeleteGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteGroupRequestBody struct {
	GroupArn  *string `json:"GroupARN"`
	GroupName *string `json:"GroupName"`
}

type DeleteGroupRequest struct {
	Headers DeleteGroupHeaders
	Request DeleteGroupRequestBody `request:"mediaType=application/json"`
}

type DeleteGroupResponse struct {
	ContentType             string
	DeleteGroupResult       map[string]interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
	ThrottledException      *interface{}
}
