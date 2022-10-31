package operations

type PostModifyClusterIamRolesActionEnum string

const (
	PostModifyClusterIamRolesActionEnumModifyClusterIamRoles PostModifyClusterIamRolesActionEnum = "ModifyClusterIamRoles"
)

type PostModifyClusterIamRolesVersionEnum string

const (
	PostModifyClusterIamRolesVersionEnumTwoThousandAndTwelve1201 PostModifyClusterIamRolesVersionEnum = "2012-12-01"
)

type PostModifyClusterIamRolesQueryParams struct {
	Action  PostModifyClusterIamRolesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyClusterIamRolesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyClusterIamRolesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyClusterIamRolesRequest struct {
	QueryParams PostModifyClusterIamRolesQueryParams
	Headers     PostModifyClusterIamRolesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyClusterIamRolesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
