package operations

type PostResumeClusterActionEnum string

const (
	PostResumeClusterActionEnumResumeCluster PostResumeClusterActionEnum = "ResumeCluster"
)

type PostResumeClusterVersionEnum string

const (
	PostResumeClusterVersionEnumTwoThousandAndTwelve1201 PostResumeClusterVersionEnum = "2012-12-01"
)

type PostResumeClusterQueryParams struct {
	Action  PostResumeClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResumeClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResumeClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostResumeClusterRequest struct {
	QueryParams PostResumeClusterQueryParams
	Headers     PostResumeClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResumeClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
