package operations

type GetDescribePartnersActionEnum string

const (
	GetDescribePartnersActionEnumDescribePartners GetDescribePartnersActionEnum = "DescribePartners"
)

type GetDescribePartnersVersionEnum string

const (
	GetDescribePartnersVersionEnumTwoThousandAndTwelve1201 GetDescribePartnersVersionEnum = "2012-12-01"
)

type GetDescribePartnersQueryParams struct {
	AccountID         string                         `queryParam:"style=form,explode=true,name=AccountId"`
	Action            GetDescribePartnersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                         `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	DatabaseName      *string                        `queryParam:"style=form,explode=true,name=DatabaseName"`
	PartnerName       *string                        `queryParam:"style=form,explode=true,name=PartnerName"`
	Version           GetDescribePartnersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribePartnersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribePartnersRequest struct {
	QueryParams GetDescribePartnersQueryParams
	Headers     GetDescribePartnersHeaders
}

type GetDescribePartnersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
