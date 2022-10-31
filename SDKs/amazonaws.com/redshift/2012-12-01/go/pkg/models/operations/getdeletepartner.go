package operations

type GetDeletePartnerActionEnum string

const (
	GetDeletePartnerActionEnumDeletePartner GetDeletePartnerActionEnum = "DeletePartner"
)

type GetDeletePartnerVersionEnum string

const (
	GetDeletePartnerVersionEnumTwoThousandAndTwelve1201 GetDeletePartnerVersionEnum = "2012-12-01"
)

type GetDeletePartnerQueryParams struct {
	AccountID         string                      `queryParam:"style=form,explode=true,name=AccountId"`
	Action            GetDeletePartnerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                      `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	DatabaseName      string                      `queryParam:"style=form,explode=true,name=DatabaseName"`
	PartnerName       string                      `queryParam:"style=form,explode=true,name=PartnerName"`
	Version           GetDeletePartnerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeletePartnerHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeletePartnerRequest struct {
	QueryParams GetDeletePartnerQueryParams
	Headers     GetDeletePartnerHeaders
}

type GetDeletePartnerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
