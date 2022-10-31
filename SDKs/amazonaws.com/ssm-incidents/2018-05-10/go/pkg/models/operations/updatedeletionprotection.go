package operations

type UpdateDeletionProtectionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateDeletionProtectionRequestBody struct {
	Arn               string  `json:"arn"`
	ClientToken       *string `json:"clientToken,omitempty"`
	DeletionProtected bool    `json:"deletionProtected"`
}

type UpdateDeletionProtectionRequest struct {
	Headers UpdateDeletionProtectionHeaders
	Request UpdateDeletionProtectionRequestBody `request:"mediaType=application/json"`
}

type UpdateDeletionProtectionResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UpdateDeletionProtectionOutput map[string]interface{}
	ValidationException            *interface{}
}
