package shared

// ActivityTypeDetail
// Detailed information about an activity type.
type ActivityTypeDetail struct {
	Configuration ActivityTypeConfiguration `json:"configuration"`
	TypeInfo      ActivityTypeInfo          `json:"typeInfo"`
}
