package operations

type PostGetClusterCredentialsActionEnum string

const (
	PostGetClusterCredentialsActionEnumGetClusterCredentials PostGetClusterCredentialsActionEnum = "GetClusterCredentials"
)

type PostGetClusterCredentialsVersionEnum string

const (
	PostGetClusterCredentialsVersionEnumTwoThousandAndTwelve1201 PostGetClusterCredentialsVersionEnum = "2012-12-01"
)

type PostGetClusterCredentialsQueryParams struct {
	Action  PostGetClusterCredentialsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetClusterCredentialsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetClusterCredentialsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetClusterCredentialsRequest struct {
	QueryParams PostGetClusterCredentialsQueryParams
	Headers     PostGetClusterCredentialsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetClusterCredentialsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
