package operations

type GetAddPartnerActionEnum string

const (
	GetAddPartnerActionEnumAddPartner GetAddPartnerActionEnum = "AddPartner"
)

type GetAddPartnerVersionEnum string

const (
	GetAddPartnerVersionEnumTwoThousandAndTwelve1201 GetAddPartnerVersionEnum = "2012-12-01"
)

type GetAddPartnerQueryParams struct {
	AccountID         string                   `queryParam:"style=form,explode=true,name=AccountId"`
	Action            GetAddPartnerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                   `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	DatabaseName      string                   `queryParam:"style=form,explode=true,name=DatabaseName"`
	PartnerName       string                   `queryParam:"style=form,explode=true,name=PartnerName"`
	Version           GetAddPartnerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAddPartnerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAddPartnerRequest struct {
	QueryParams GetAddPartnerQueryParams
	Headers     GetAddPartnerHeaders
}

type GetAddPartnerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
