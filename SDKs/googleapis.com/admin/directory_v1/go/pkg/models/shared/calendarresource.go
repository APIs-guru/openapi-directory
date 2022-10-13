package shared

type CalendarResource struct {
	BuildingID             *string      `json:"buildingId"`
	Capacity               *int32       `json:"capacity"`
	Etags                  *string      `json:"etags"`
	FeatureInstances       *interface{} `json:"featureInstances"`
	FloorName              *string      `json:"floorName"`
	FloorSection           *string      `json:"floorSection"`
	GeneratedResourceName  *string      `json:"generatedResourceName"`
	Kind                   *string      `json:"kind"`
	ResourceCategory       *string      `json:"resourceCategory"`
	ResourceDescription    *string      `json:"resourceDescription"`
	ResourceEmail          *string      `json:"resourceEmail"`
	ResourceID             *string      `json:"resourceId"`
	ResourceName           *string      `json:"resourceName"`
	ResourceType           *string      `json:"resourceType"`
	UserVisibleDescription *string      `json:"userVisibleDescription"`
}
