package operations

type DeleteCustomDataIdentifierPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteCustomDataIdentifierHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteCustomDataIdentifierRequest struct {
	PathParams DeleteCustomDataIdentifierPathParams
	Headers    DeleteCustomDataIdentifierHeaders
}

type DeleteCustomDataIdentifierResponse struct {
	AccessDeniedException              *interface{}
	ConflictException                  *interface{}
	ContentType                        string
	DeleteCustomDataIdentifierResponse map[string]interface{}
	InternalServerException            *interface{}
	ResourceNotFoundException          *interface{}
	ServiceQuotaExceededException      *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	ValidationException                *interface{}
}
