package shared

type ProductAvailabilityChangeEventAvailabilityStatusEnum string

const (
	ProductAvailabilityChangeEventAvailabilityStatusEnumUnknown     ProductAvailabilityChangeEventAvailabilityStatusEnum = "unknown"
	ProductAvailabilityChangeEventAvailabilityStatusEnumAvailable   ProductAvailabilityChangeEventAvailabilityStatusEnum = "available"
	ProductAvailabilityChangeEventAvailabilityStatusEnumRemoved     ProductAvailabilityChangeEventAvailabilityStatusEnum = "removed"
	ProductAvailabilityChangeEventAvailabilityStatusEnumUnpublished ProductAvailabilityChangeEventAvailabilityStatusEnum = "unpublished"
)

// ProductAvailabilityChangeEvent
// An event generated whenever a product's availability changes.
type ProductAvailabilityChangeEvent struct {
	AvailabilityStatus *ProductAvailabilityChangeEventAvailabilityStatusEnum `json:"availabilityStatus,omitempty"`
	ProductID          *string                                               `json:"productId,omitempty"`
}
