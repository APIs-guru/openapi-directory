package operations

type GetPurchaseReservedNodeOfferingActionEnum string

const (
	GetPurchaseReservedNodeOfferingActionEnumPurchaseReservedNodeOffering GetPurchaseReservedNodeOfferingActionEnum = "PurchaseReservedNodeOffering"
)

type GetPurchaseReservedNodeOfferingVersionEnum string

const (
	GetPurchaseReservedNodeOfferingVersionEnumTwoThousandAndTwelve1201 GetPurchaseReservedNodeOfferingVersionEnum = "2012-12-01"
)

type GetPurchaseReservedNodeOfferingQueryParams struct {
	Action                 GetPurchaseReservedNodeOfferingActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	NodeCount              *int64                                     `queryParam:"style=form,explode=true,name=NodeCount"`
	ReservedNodeOfferingID string                                     `queryParam:"style=form,explode=true,name=ReservedNodeOfferingId"`
	Version                GetPurchaseReservedNodeOfferingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPurchaseReservedNodeOfferingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPurchaseReservedNodeOfferingRequest struct {
	QueryParams GetPurchaseReservedNodeOfferingQueryParams
	Headers     GetPurchaseReservedNodeOfferingHeaders
}

type GetPurchaseReservedNodeOfferingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
