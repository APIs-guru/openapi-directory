package operations

type PostRebootClusterActionEnum string

const (
	PostRebootClusterActionEnumRebootCluster PostRebootClusterActionEnum = "RebootCluster"
)

type PostRebootClusterVersionEnum string

const (
	PostRebootClusterVersionEnumTwoThousandAndTwelve1201 PostRebootClusterVersionEnum = "2012-12-01"
)

type PostRebootClusterQueryParams struct {
	Action  PostRebootClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRebootClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRebootClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRebootClusterRequest struct {
	QueryParams PostRebootClusterQueryParams
	Headers     PostRebootClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRebootClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
