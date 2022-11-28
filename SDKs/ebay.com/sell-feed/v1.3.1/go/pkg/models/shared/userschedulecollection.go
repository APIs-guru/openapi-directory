package shared

// UserScheduleCollection
// The type that defines the fields for a paginated result set of user schedules. The response consists of 0 or more sequenced pages where each page has 0 or more items.
type UserScheduleCollection struct {
	Href      *string                `json:"href,omitempty"`
	Limit     *int32                 `json:"limit,omitempty"`
	Next      *string                `json:"next,omitempty"`
	Offset    *int32                 `json:"offset,omitempty"`
	Prev      *string                `json:"prev,omitempty"`
	Schedules []UserScheduleResponse `json:"schedules,omitempty"`
	Total     *int32                 `json:"total,omitempty"`
}
