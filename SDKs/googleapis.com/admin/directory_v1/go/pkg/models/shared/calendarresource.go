package shared

// CalendarResource
// Public API: Resources.calendars
type CalendarResource struct {
	BuildingID             *string      `json:"buildingId,omitempty"`
	Capacity               *int32       `json:"capacity,omitempty"`
	Etags                  *string      `json:"etags,omitempty"`
	FeatureInstances       *interface{} `json:"featureInstances,omitempty"`
	FloorName              *string      `json:"floorName,omitempty"`
	FloorSection           *string      `json:"floorSection,omitempty"`
	GeneratedResourceName  *string      `json:"generatedResourceName,omitempty"`
	Kind                   *string      `json:"kind,omitempty"`
	ResourceCategory       *string      `json:"resourceCategory,omitempty"`
	ResourceDescription    *string      `json:"resourceDescription,omitempty"`
	ResourceEmail          *string      `json:"resourceEmail,omitempty"`
	ResourceID             *string      `json:"resourceId,omitempty"`
	ResourceName           *string      `json:"resourceName,omitempty"`
	ResourceType           *string      `json:"resourceType,omitempty"`
	UserVisibleDescription *string      `json:"userVisibleDescription,omitempty"`
}
