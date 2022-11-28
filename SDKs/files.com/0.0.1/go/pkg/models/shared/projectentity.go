package shared

type ProjectEntityGlobalAccessEnum string

const (
	ProjectEntityGlobalAccessEnumNone           ProjectEntityGlobalAccessEnum = "none"
	ProjectEntityGlobalAccessEnumAnyoneWithRead ProjectEntityGlobalAccessEnum = "anyone_with_read"
	ProjectEntityGlobalAccessEnumAnyoneWithFull ProjectEntityGlobalAccessEnum = "anyone_with_full"
)

// ProjectEntity
// List Projects
type ProjectEntity struct {
	GlobalAccess *ProjectEntityGlobalAccessEnum `json:"global_access,omitempty"`
	ID           *int32                         `json:"id,omitempty"`
}
