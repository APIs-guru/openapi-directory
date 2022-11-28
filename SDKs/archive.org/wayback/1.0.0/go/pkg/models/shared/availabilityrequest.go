package shared

type AvailabilityRequestClosestEnum string

const (
	AvailabilityRequestClosestEnumEither AvailabilityRequestClosestEnum = "either"
	AvailabilityRequestClosestEnumAfter  AvailabilityRequestClosestEnum = "after"
	AvailabilityRequestClosestEnumBefore AvailabilityRequestClosestEnum = "before"
)

type AvailabilityRequest struct {
	Closest   *AvailabilityRequestClosestEnum `json:"closest,omitempty" form:"name=closest"`
	Tag       *string                         `json:"tag,omitempty" form:"name=tag"`
	Timestamp *string                         `json:"timestamp,omitempty" form:"name=timestamp"`
	URL       string                          `json:"url" form:"name=url"`
}
