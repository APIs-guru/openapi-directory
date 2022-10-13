package operations

type GetDescribeAuthenticationProfilesActionEnum string

const (
	GetDescribeAuthenticationProfilesActionEnumDescribeAuthenticationProfiles GetDescribeAuthenticationProfilesActionEnum = "DescribeAuthenticationProfiles"
)

type GetDescribeAuthenticationProfilesVersionEnum string

const (
	GetDescribeAuthenticationProfilesVersionEnumTwoThousandAndTwelve1201 GetDescribeAuthenticationProfilesVersionEnum = "2012-12-01"
)

type GetDescribeAuthenticationProfilesQueryParams struct {
	Action                    GetDescribeAuthenticationProfilesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AuthenticationProfileName *string                                      `queryParam:"style=form,explode=true,name=AuthenticationProfileName"`
	Version                   GetDescribeAuthenticationProfilesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeAuthenticationProfilesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeAuthenticationProfilesRequest struct {
	QueryParams GetDescribeAuthenticationProfilesQueryParams
	Headers     GetDescribeAuthenticationProfilesHeaders
}

type GetDescribeAuthenticationProfilesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
