package operations

type PostModifyScheduledActionActionEnum string

const (
	PostModifyScheduledActionActionEnumModifyScheduledAction PostModifyScheduledActionActionEnum = "ModifyScheduledAction"
)

type PostModifyScheduledActionVersionEnum string

const (
	PostModifyScheduledActionVersionEnumTwoThousandAndTwelve1201 PostModifyScheduledActionVersionEnum = "2012-12-01"
)

type PostModifyScheduledActionQueryParams struct {
	Action  PostModifyScheduledActionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyScheduledActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyScheduledActionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyScheduledActionRequest struct {
	QueryParams PostModifyScheduledActionQueryParams
	Headers     PostModifyScheduledActionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyScheduledActionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
