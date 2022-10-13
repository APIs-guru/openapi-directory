package operations

type DeleteSlotTypeVersionPathParams struct {
	Name    string `pathParam:"style=simple,explode=false,name=name"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type DeleteSlotTypeVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteSlotTypeVersionRequest struct {
	PathParams DeleteSlotTypeVersionPathParams
	Headers    DeleteSlotTypeVersionHeaders
}

type DeleteSlotTypeVersionResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	ResourceInUseException   *interface{}
	StatusCode               int64
}
