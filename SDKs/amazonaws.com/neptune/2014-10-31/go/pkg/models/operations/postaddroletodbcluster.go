package operations

type PostAddRoleToDbClusterActionEnum string

const (
	PostAddRoleToDbClusterActionEnumAddRoleToDbCluster PostAddRoleToDbClusterActionEnum = "AddRoleToDBCluster"
)

type PostAddRoleToDbClusterVersionEnum string

const (
	PostAddRoleToDbClusterVersionEnumTwoThousandAndFourteen1031 PostAddRoleToDbClusterVersionEnum = "2014-10-31"
)

type PostAddRoleToDbClusterQueryParams struct {
	Action  PostAddRoleToDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAddRoleToDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAddRoleToDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAddRoleToDbClusterRequest struct {
	QueryParams PostAddRoleToDbClusterQueryParams
	Headers     PostAddRoleToDbClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAddRoleToDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
