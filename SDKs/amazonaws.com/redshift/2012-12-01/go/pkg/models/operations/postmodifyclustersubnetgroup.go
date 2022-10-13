package operations

type PostModifyClusterSubnetGroupActionEnum string

const (
	PostModifyClusterSubnetGroupActionEnumModifyClusterSubnetGroup PostModifyClusterSubnetGroupActionEnum = "ModifyClusterSubnetGroup"
)

type PostModifyClusterSubnetGroupVersionEnum string

const (
	PostModifyClusterSubnetGroupVersionEnumTwoThousandAndTwelve1201 PostModifyClusterSubnetGroupVersionEnum = "2012-12-01"
)

type PostModifyClusterSubnetGroupQueryParams struct {
	Action  PostModifyClusterSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyClusterSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyClusterSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyClusterSubnetGroupRequest struct {
	QueryParams PostModifyClusterSubnetGroupQueryParams
	Headers     PostModifyClusterSubnetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyClusterSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
