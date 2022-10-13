package operations

type PostPromoteReadReplicaDbClusterActionEnum string

const (
	PostPromoteReadReplicaDbClusterActionEnumPromoteReadReplicaDbCluster PostPromoteReadReplicaDbClusterActionEnum = "PromoteReadReplicaDBCluster"
)

type PostPromoteReadReplicaDbClusterVersionEnum string

const (
	PostPromoteReadReplicaDbClusterVersionEnumTwoThousandAndFourteen1031 PostPromoteReadReplicaDbClusterVersionEnum = "2014-10-31"
)

type PostPromoteReadReplicaDbClusterQueryParams struct {
	Action  PostPromoteReadReplicaDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPromoteReadReplicaDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPromoteReadReplicaDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostPromoteReadReplicaDbClusterRequest struct {
	QueryParams PostPromoteReadReplicaDbClusterQueryParams
	Headers     PostPromoteReadReplicaDbClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPromoteReadReplicaDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
