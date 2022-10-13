package operations

type PostCreateDbSubnetGroupActionEnum string

const (
	PostCreateDbSubnetGroupActionEnumCreateDbSubnetGroup PostCreateDbSubnetGroupActionEnum = "CreateDBSubnetGroup"
)

type PostCreateDbSubnetGroupVersionEnum string

const (
	PostCreateDbSubnetGroupVersionEnumTwoThousandAndFourteen0901 PostCreateDbSubnetGroupVersionEnum = "2014-09-01"
)

type PostCreateDbSubnetGroupQueryParams struct {
	Action  PostCreateDbSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDbSubnetGroupRequest struct {
	QueryParams PostCreateDbSubnetGroupQueryParams
	Headers     PostCreateDbSubnetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
