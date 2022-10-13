package operations

type GetRemoveRoleFromDbClusterActionEnum string

const (
	GetRemoveRoleFromDbClusterActionEnumRemoveRoleFromDbCluster GetRemoveRoleFromDbClusterActionEnum = "RemoveRoleFromDBCluster"
)

type GetRemoveRoleFromDbClusterVersionEnum string

const (
	GetRemoveRoleFromDbClusterVersionEnumTwoThousandAndFourteen1031 GetRemoveRoleFromDbClusterVersionEnum = "2014-10-31"
)

type GetRemoveRoleFromDbClusterQueryParams struct {
	Action              GetRemoveRoleFromDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbClusterIdentifier string                                `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	FeatureName         *string                               `queryParam:"style=form,explode=true,name=FeatureName"`
	RoleArn             string                                `queryParam:"style=form,explode=true,name=RoleArn"`
	Version             GetRemoveRoleFromDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRemoveRoleFromDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRemoveRoleFromDbClusterRequest struct {
	QueryParams GetRemoveRoleFromDbClusterQueryParams
	Headers     GetRemoveRoleFromDbClusterHeaders
}

type GetRemoveRoleFromDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
