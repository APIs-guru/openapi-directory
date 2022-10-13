package operations

type GetModifyClusterIamRolesActionEnum string

const (
	GetModifyClusterIamRolesActionEnumModifyClusterIamRoles GetModifyClusterIamRolesActionEnum = "ModifyClusterIamRoles"
)

type GetModifyClusterIamRolesVersionEnum string

const (
	GetModifyClusterIamRolesVersionEnumTwoThousandAndTwelve1201 GetModifyClusterIamRolesVersionEnum = "2012-12-01"
)

type GetModifyClusterIamRolesQueryParams struct {
	Action            GetModifyClusterIamRolesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AddIamRoles       []string                            `queryParam:"style=form,explode=true,name=AddIamRoles"`
	ClusterIdentifier string                              `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	RemoveIamRoles    []string                            `queryParam:"style=form,explode=true,name=RemoveIamRoles"`
	Version           GetModifyClusterIamRolesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyClusterIamRolesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyClusterIamRolesRequest struct {
	QueryParams GetModifyClusterIamRolesQueryParams
	Headers     GetModifyClusterIamRolesHeaders
}

type GetModifyClusterIamRolesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
