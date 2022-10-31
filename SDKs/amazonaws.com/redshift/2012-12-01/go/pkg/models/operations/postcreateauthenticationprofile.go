package operations

type PostCreateAuthenticationProfileActionEnum string

const (
	PostCreateAuthenticationProfileActionEnumCreateAuthenticationProfile PostCreateAuthenticationProfileActionEnum = "CreateAuthenticationProfile"
)

type PostCreateAuthenticationProfileVersionEnum string

const (
	PostCreateAuthenticationProfileVersionEnumTwoThousandAndTwelve1201 PostCreateAuthenticationProfileVersionEnum = "2012-12-01"
)

type PostCreateAuthenticationProfileQueryParams struct {
	Action  PostCreateAuthenticationProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateAuthenticationProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateAuthenticationProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateAuthenticationProfileRequest struct {
	QueryParams PostCreateAuthenticationProfileQueryParams
	Headers     PostCreateAuthenticationProfileHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateAuthenticationProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
