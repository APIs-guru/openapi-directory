package operations

type DeleteLexiconPathParams struct {
	LexiconName string `pathParam:"style=simple,explode=false,name=LexiconName"`
}

type DeleteLexiconHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteLexiconRequest struct {
	PathParams DeleteLexiconPathParams
	Headers    DeleteLexiconHeaders
}

type DeleteLexiconResponse struct {
	ContentType              string
	DeleteLexiconOutput      map[string]interface{}
	LexiconNotFoundException *interface{}
	ServiceFailureException  *interface{}
	StatusCode               int64
}
