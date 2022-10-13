package operations

type GetDescribeEndpointAuthorizationActionEnum string

const (
	GetDescribeEndpointAuthorizationActionEnumDescribeEndpointAuthorization GetDescribeEndpointAuthorizationActionEnum = "DescribeEndpointAuthorization"
)

type GetDescribeEndpointAuthorizationVersionEnum string

const (
	GetDescribeEndpointAuthorizationVersionEnumTwoThousandAndTwelve1201 GetDescribeEndpointAuthorizationVersionEnum = "2012-12-01"
)

type GetDescribeEndpointAuthorizationQueryParams struct {
	Account           *string                                     `queryParam:"style=form,explode=true,name=Account"`
	Action            GetDescribeEndpointAuthorizationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier *string                                     `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Grantee           *bool                                       `queryParam:"style=form,explode=true,name=Grantee"`
	Marker            *string                                     `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords        *int64                                      `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version           GetDescribeEndpointAuthorizationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeEndpointAuthorizationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeEndpointAuthorizationRequest struct {
	QueryParams GetDescribeEndpointAuthorizationQueryParams
	Headers     GetDescribeEndpointAuthorizationHeaders
}

type GetDescribeEndpointAuthorizationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
