package operations

type PostRemoveRoleFromDbClusterActionEnum string

const (
	PostRemoveRoleFromDbClusterActionEnumRemoveRoleFromDbCluster PostRemoveRoleFromDbClusterActionEnum = "RemoveRoleFromDBCluster"
)

type PostRemoveRoleFromDbClusterVersionEnum string

const (
	PostRemoveRoleFromDbClusterVersionEnumTwoThousandAndFourteen1031 PostRemoveRoleFromDbClusterVersionEnum = "2014-10-31"
)

type PostRemoveRoleFromDbClusterQueryParams struct {
	Action  PostRemoveRoleFromDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRemoveRoleFromDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRemoveRoleFromDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostRemoveRoleFromDbClusterRequest struct {
	QueryParams PostRemoveRoleFromDbClusterQueryParams
	Headers     PostRemoveRoleFromDbClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRemoveRoleFromDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
