package operations

type GetDeleteAuthenticationProfileActionEnum string

const (
	GetDeleteAuthenticationProfileActionEnumDeleteAuthenticationProfile GetDeleteAuthenticationProfileActionEnum = "DeleteAuthenticationProfile"
)

type GetDeleteAuthenticationProfileVersionEnum string

const (
	GetDeleteAuthenticationProfileVersionEnumTwoThousandAndTwelve1201 GetDeleteAuthenticationProfileVersionEnum = "2012-12-01"
)

type GetDeleteAuthenticationProfileQueryParams struct {
	Action                    GetDeleteAuthenticationProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AuthenticationProfileName string                                    `queryParam:"style=form,explode=true,name=AuthenticationProfileName"`
	Version                   GetDeleteAuthenticationProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteAuthenticationProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteAuthenticationProfileRequest struct {
	QueryParams GetDeleteAuthenticationProfileQueryParams
	Headers     GetDeleteAuthenticationProfileHeaders
}

type GetDeleteAuthenticationProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
