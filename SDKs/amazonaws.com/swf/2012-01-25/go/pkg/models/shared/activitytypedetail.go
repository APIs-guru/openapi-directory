package shared

type ActivityTypeDetail struct {
	Configuration ActivityTypeConfiguration `json:"configuration"`
	TypeInfo      ActivityTypeInfo          `json:"typeInfo"`
}
