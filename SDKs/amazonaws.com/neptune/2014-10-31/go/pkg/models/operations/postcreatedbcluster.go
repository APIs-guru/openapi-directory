package operations

type PostCreateDbClusterActionEnum string

const (
	PostCreateDbClusterActionEnumCreateDbCluster PostCreateDbClusterActionEnum = "CreateDBCluster"
)

type PostCreateDbClusterVersionEnum string

const (
	PostCreateDbClusterVersionEnumTwoThousandAndFourteen1031 PostCreateDbClusterVersionEnum = "2014-10-31"
)

type PostCreateDbClusterQueryParams struct {
	Action  PostCreateDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDbClusterRequest struct {
	QueryParams PostCreateDbClusterQueryParams
	Headers     PostCreateDbClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
