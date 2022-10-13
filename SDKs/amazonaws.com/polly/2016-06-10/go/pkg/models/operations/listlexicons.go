package operations

import (
	"openapi/pkg/models/shared"
)

type ListLexiconsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListLexiconsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListLexiconsRequest struct {
	QueryParams ListLexiconsQueryParams
	Headers     ListLexiconsHeaders
}

type ListLexiconsResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListLexiconsOutput        *shared.ListLexiconsOutput
	ServiceFailureException   *interface{}
	StatusCode                int64
}
