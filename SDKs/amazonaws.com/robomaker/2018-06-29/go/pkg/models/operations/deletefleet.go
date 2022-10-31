package operations

type DeleteFleetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteFleetRequestBody struct {
	Fleet string `json:"fleet"`
}

type DeleteFleetRequest struct {
	Headers DeleteFleetHeaders
	Request DeleteFleetRequestBody `request:"mediaType=application/json"`
}

type DeleteFleetResponse struct {
	ContentType               string
	DeleteFleetResponse       map[string]interface{}
	InternalServerException   *interface{}
	InvalidParameterException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
