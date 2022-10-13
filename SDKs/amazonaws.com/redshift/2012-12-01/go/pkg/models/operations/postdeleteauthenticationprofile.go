package operations

type PostDeleteAuthenticationProfileActionEnum string

const (
	PostDeleteAuthenticationProfileActionEnumDeleteAuthenticationProfile PostDeleteAuthenticationProfileActionEnum = "DeleteAuthenticationProfile"
)

type PostDeleteAuthenticationProfileVersionEnum string

const (
	PostDeleteAuthenticationProfileVersionEnumTwoThousandAndTwelve1201 PostDeleteAuthenticationProfileVersionEnum = "2012-12-01"
)

type PostDeleteAuthenticationProfileQueryParams struct {
	Action  PostDeleteAuthenticationProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteAuthenticationProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteAuthenticationProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteAuthenticationProfileRequest struct {
	QueryParams PostDeleteAuthenticationProfileQueryParams
	Headers     PostDeleteAuthenticationProfileHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteAuthenticationProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
