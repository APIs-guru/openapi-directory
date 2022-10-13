package operations

type GetDescribeReservedDbInstancesOfferingsActionEnum string

const (
	GetDescribeReservedDbInstancesOfferingsActionEnumDescribeReservedDbInstancesOfferings GetDescribeReservedDbInstancesOfferingsActionEnum = "DescribeReservedDBInstancesOfferings"
)

type GetDescribeReservedDbInstancesOfferingsVersionEnum string

const (
	GetDescribeReservedDbInstancesOfferingsVersionEnumTwoThousandAndThirteen0212 GetDescribeReservedDbInstancesOfferingsVersionEnum = "2013-02-12"
)

type GetDescribeReservedDbInstancesOfferingsQueryParams struct {
	Action                        GetDescribeReservedDbInstancesOfferingsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceClass               *string                                            `queryParam:"style=form,explode=true,name=DBInstanceClass"`
	Duration                      *string                                            `queryParam:"style=form,explode=true,name=Duration"`
	Marker                        *string                                            `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords                    *int64                                             `queryParam:"style=form,explode=true,name=MaxRecords"`
	MultiAz                       *bool                                              `queryParam:"style=form,explode=true,name=MultiAZ"`
	OfferingType                  *string                                            `queryParam:"style=form,explode=true,name=OfferingType"`
	ProductDescription            *string                                            `queryParam:"style=form,explode=true,name=ProductDescription"`
	ReservedDbInstancesOfferingID *string                                            `queryParam:"style=form,explode=true,name=ReservedDBInstancesOfferingId"`
	Version                       GetDescribeReservedDbInstancesOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeReservedDbInstancesOfferingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeReservedDbInstancesOfferingsRequest struct {
	QueryParams GetDescribeReservedDbInstancesOfferingsQueryParams
	Headers     GetDescribeReservedDbInstancesOfferingsHeaders
}

type GetDescribeReservedDbInstancesOfferingsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
