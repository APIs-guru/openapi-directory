package operations

type GetPurchaseReservedDbInstancesOfferingActionEnum string

const (
	GetPurchaseReservedDbInstancesOfferingActionEnumPurchaseReservedDbInstancesOffering GetPurchaseReservedDbInstancesOfferingActionEnum = "PurchaseReservedDBInstancesOffering"
)

type GetPurchaseReservedDbInstancesOfferingVersionEnum string

const (
	GetPurchaseReservedDbInstancesOfferingVersionEnumTwoThousandAndThirteen0212 GetPurchaseReservedDbInstancesOfferingVersionEnum = "2013-02-12"
)

type GetPurchaseReservedDbInstancesOfferingQueryParams struct {
	Action                        GetPurchaseReservedDbInstancesOfferingActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceCount               *int64                                            `queryParam:"style=form,explode=true,name=DBInstanceCount"`
	ReservedDbInstanceID          *string                                           `queryParam:"style=form,explode=true,name=ReservedDBInstanceId"`
	ReservedDbInstancesOfferingID string                                            `queryParam:"style=form,explode=true,name=ReservedDBInstancesOfferingId"`
	Version                       GetPurchaseReservedDbInstancesOfferingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPurchaseReservedDbInstancesOfferingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPurchaseReservedDbInstancesOfferingRequest struct {
	QueryParams GetPurchaseReservedDbInstancesOfferingQueryParams
	Headers     GetPurchaseReservedDbInstancesOfferingHeaders
}

type GetPurchaseReservedDbInstancesOfferingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
