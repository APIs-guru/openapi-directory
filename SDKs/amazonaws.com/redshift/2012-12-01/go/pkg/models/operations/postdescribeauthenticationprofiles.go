package operations

type PostDescribeAuthenticationProfilesActionEnum string

const (
	PostDescribeAuthenticationProfilesActionEnumDescribeAuthenticationProfiles PostDescribeAuthenticationProfilesActionEnum = "DescribeAuthenticationProfiles"
)

type PostDescribeAuthenticationProfilesVersionEnum string

const (
	PostDescribeAuthenticationProfilesVersionEnumTwoThousandAndTwelve1201 PostDescribeAuthenticationProfilesVersionEnum = "2012-12-01"
)

type PostDescribeAuthenticationProfilesQueryParams struct {
	Action  PostDescribeAuthenticationProfilesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAuthenticationProfilesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAuthenticationProfilesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeAuthenticationProfilesRequest struct {
	QueryParams PostDescribeAuthenticationProfilesQueryParams
	Headers     PostDescribeAuthenticationProfilesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAuthenticationProfilesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
