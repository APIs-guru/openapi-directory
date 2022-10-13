package operations

type GetDescribeValidDbInstanceModificationsActionEnum string

const (
	GetDescribeValidDbInstanceModificationsActionEnumDescribeValidDbInstanceModifications GetDescribeValidDbInstanceModificationsActionEnum = "DescribeValidDBInstanceModifications"
)

type GetDescribeValidDbInstanceModificationsVersionEnum string

const (
	GetDescribeValidDbInstanceModificationsVersionEnumTwoThousandAndFourteen1031 GetDescribeValidDbInstanceModificationsVersionEnum = "2014-10-31"
)

type GetDescribeValidDbInstanceModificationsQueryParams struct {
	Action               GetDescribeValidDbInstanceModificationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceIdentifier string                                             `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	Version              GetDescribeValidDbInstanceModificationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeValidDbInstanceModificationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeValidDbInstanceModificationsRequest struct {
	QueryParams GetDescribeValidDbInstanceModificationsQueryParams
	Headers     GetDescribeValidDbInstanceModificationsHeaders
}

type GetDescribeValidDbInstanceModificationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
