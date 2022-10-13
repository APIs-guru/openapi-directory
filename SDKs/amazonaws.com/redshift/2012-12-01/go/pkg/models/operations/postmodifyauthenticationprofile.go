package operations

type PostModifyAuthenticationProfileActionEnum string

const (
	PostModifyAuthenticationProfileActionEnumModifyAuthenticationProfile PostModifyAuthenticationProfileActionEnum = "ModifyAuthenticationProfile"
)

type PostModifyAuthenticationProfileVersionEnum string

const (
	PostModifyAuthenticationProfileVersionEnumTwoThousandAndTwelve1201 PostModifyAuthenticationProfileVersionEnum = "2012-12-01"
)

type PostModifyAuthenticationProfileQueryParams struct {
	Action  PostModifyAuthenticationProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyAuthenticationProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyAuthenticationProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyAuthenticationProfileRequest struct {
	QueryParams PostModifyAuthenticationProfileQueryParams
	Headers     PostModifyAuthenticationProfileHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyAuthenticationProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
