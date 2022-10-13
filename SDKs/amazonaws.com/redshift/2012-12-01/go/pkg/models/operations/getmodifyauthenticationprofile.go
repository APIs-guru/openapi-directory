package operations

type GetModifyAuthenticationProfileActionEnum string

const (
	GetModifyAuthenticationProfileActionEnumModifyAuthenticationProfile GetModifyAuthenticationProfileActionEnum = "ModifyAuthenticationProfile"
)

type GetModifyAuthenticationProfileVersionEnum string

const (
	GetModifyAuthenticationProfileVersionEnumTwoThousandAndTwelve1201 GetModifyAuthenticationProfileVersionEnum = "2012-12-01"
)

type GetModifyAuthenticationProfileQueryParams struct {
	Action                       GetModifyAuthenticationProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AuthenticationProfileContent string                                    `queryParam:"style=form,explode=true,name=AuthenticationProfileContent"`
	AuthenticationProfileName    string                                    `queryParam:"style=form,explode=true,name=AuthenticationProfileName"`
	Version                      GetModifyAuthenticationProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyAuthenticationProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyAuthenticationProfileRequest struct {
	QueryParams GetModifyAuthenticationProfileQueryParams
	Headers     GetModifyAuthenticationProfileHeaders
}

type GetModifyAuthenticationProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
