package operations

type PostChangeMessageVisibilityActionEnum string

const (
	PostChangeMessageVisibilityActionEnumChangeMessageVisibility PostChangeMessageVisibilityActionEnum = "ChangeMessageVisibility"
)

type PostChangeMessageVisibilityVersionEnum string

const (
	PostChangeMessageVisibilityVersionEnumTwoThousandAndTwelve1105 PostChangeMessageVisibilityVersionEnum = "2012-11-05"
)

type PostChangeMessageVisibilityQueryParams struct {
	Action  PostChangeMessageVisibilityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostChangeMessageVisibilityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostChangeMessageVisibilityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostChangeMessageVisibilityRequest struct {
	QueryParams PostChangeMessageVisibilityQueryParams
	Headers     PostChangeMessageVisibilityHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostChangeMessageVisibilityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
