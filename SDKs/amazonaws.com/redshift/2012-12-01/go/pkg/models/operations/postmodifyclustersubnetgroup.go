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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
