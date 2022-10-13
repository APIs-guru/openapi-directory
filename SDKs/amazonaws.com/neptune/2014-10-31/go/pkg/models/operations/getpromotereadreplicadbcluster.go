package operations

type GetPromoteReadReplicaDbClusterActionEnum string

const (
	GetPromoteReadReplicaDbClusterActionEnumPromoteReadReplicaDbCluster GetPromoteReadReplicaDbClusterActionEnum = "PromoteReadReplicaDBCluster"
)

type GetPromoteReadReplicaDbClusterVersionEnum string

const (
	GetPromoteReadReplicaDbClusterVersionEnumTwoThousandAndFourteen1031 GetPromoteReadReplicaDbClusterVersionEnum = "2014-10-31"
)

type GetPromoteReadReplicaDbClusterQueryParams struct {
	Action              GetPromoteReadReplicaDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbClusterIdentifier string                                    `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	Version             GetPromoteReadReplicaDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPromoteReadReplicaDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPromoteReadReplicaDbClusterRequest struct {
	QueryParams GetPromoteReadReplicaDbClusterQueryParams
	Headers     GetPromoteReadReplicaDbClusterHeaders
}

type GetPromoteReadReplicaDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
