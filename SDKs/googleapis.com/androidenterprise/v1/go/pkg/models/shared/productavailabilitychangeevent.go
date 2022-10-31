package shared




type ProductAvailabilityChangeEventAvailabilityStatusEnum string

const (
    ProductAvailabilityChangeEventAvailabilityStatusEnumUnknown ProductAvailabilityChangeEventAvailabilityStatusEnum = "unknown"
ProductAvailabilityChangeEventAvailabilityStatusEnumAvailable ProductAvailabilityChangeEventAvailabilityStatusEnum = "available"
ProductAvailabilityChangeEventAvailabilityStatusEnumRemoved ProductAvailabilityChangeEventAvailabilityStatusEnum = "removed"
ProductAvailabilityChangeEventAvailabilityStatusEnumUnpublished ProductAvailabilityChangeEventAvailabilityStatusEnum = "unpublished"
)


type ProductAvailabilityChangeEvent struct {
    AvailabilityStatus *ProductAvailabilityChangeEventAvailabilityStatusEnum `json:"availabilityStatus,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    
}

