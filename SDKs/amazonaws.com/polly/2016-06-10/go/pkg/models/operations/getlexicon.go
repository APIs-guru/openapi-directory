package operations

import (
	"openapi/pkg/models/shared"
)

type GetLexiconPathParams struct {
	LexiconName string `pathParam:"style=simple,explode=false,name=LexiconName"`
}

type GetLexiconHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetLexiconRequest struct {
	PathParams GetLexiconPathParams
	Headers    GetLexiconHeaders
}

type GetLexiconResponse struct {
	ContentType              string
	GetLexiconOutput         *shared.GetLexiconOutput
	LexiconNotFoundException *interface{}
	ServiceFailureException  *interface{}
	StatusCode               int64
}
