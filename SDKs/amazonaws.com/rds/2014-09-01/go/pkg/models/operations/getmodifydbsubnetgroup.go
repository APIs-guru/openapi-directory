package operations

type GetModifyDbSubnetGroupActionEnum string

const (
	GetModifyDbSubnetGroupActionEnumModifyDbSubnetGroup GetModifyDbSubnetGroupActionEnum = "ModifyDBSubnetGroup"
)

type GetModifyDbSubnetGroupVersionEnum string

const (
	GetModifyDbSubnetGroupVersionEnumTwoThousandAndFourteen0901 GetModifyDbSubnetGroupVersionEnum = "2014-09-01"
)

type GetModifyDbSubnetGroupQueryParams struct {
	Action                   GetModifyDbSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbSubnetGroupDescription *string                           `queryParam:"style=form,explode=true,name=DBSubnetGroupDescription"`
	DbSubnetGroupName        string                            `queryParam:"style=form,explode=true,name=DBSubnetGroupName"`
	SubnetIds                []string                          `queryParam:"style=form,explode=true,name=SubnetIds"`
	Version                  GetModifyDbSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyDbSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyDbSubnetGroupRequest struct {
	QueryParams GetModifyDbSubnetGroupQueryParams
	Headers     GetModifyDbSubnetGroupHeaders
}

type GetModifyDbSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
