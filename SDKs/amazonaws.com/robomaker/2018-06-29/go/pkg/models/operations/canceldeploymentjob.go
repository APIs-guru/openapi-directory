package operations

type CancelDeploymentJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CancelDeploymentJobRequestBody struct {
	Job string `json:"job"`
}

type CancelDeploymentJobRequest struct {
	Headers CancelDeploymentJobHeaders
	Request CancelDeploymentJobRequestBody `request:"mediaType=application/json"`
}

type CancelDeploymentJobResponse struct {
	CancelDeploymentJobResponse map[string]interface{}
	ContentType                 string
	InternalServerException     *interface{}
	InvalidParameterException   *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
