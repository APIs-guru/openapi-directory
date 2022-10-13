package operations

type PostDescribeValidDbInstanceModificationsActionEnum string

const (
	PostDescribeValidDbInstanceModificationsActionEnumDescribeValidDbInstanceModifications PostDescribeValidDbInstanceModificationsActionEnum = "DescribeValidDBInstanceModifications"
)

type PostDescribeValidDbInstanceModificationsVersionEnum string

const (
	PostDescribeValidDbInstanceModificationsVersionEnumTwoThousandAndFourteen1031 PostDescribeValidDbInstanceModificationsVersionEnum = "2014-10-31"
)

type PostDescribeValidDbInstanceModificationsQueryParams struct {
	Action  PostDescribeValidDbInstanceModificationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeValidDbInstanceModificationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeValidDbInstanceModificationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeValidDbInstanceModificationsRequest struct {
	QueryParams PostDescribeValidDbInstanceModificationsQueryParams
	Headers     PostDescribeValidDbInstanceModificationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeValidDbInstanceModificationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
