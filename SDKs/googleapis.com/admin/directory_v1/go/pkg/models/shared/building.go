package shared

type Building struct {
	Address      *BuildingAddress     `json:"address,omitempty"`
	BuildingID   *string              `json:"buildingId,omitempty"`
	BuildingName *string              `json:"buildingName,omitempty"`
	Coordinates  *BuildingCoordinates `json:"coordinates,omitempty"`
	Description  *string              `json:"description,omitempty"`
	Etags        *string              `json:"etags,omitempty"`
	FloorNames   []string             `json:"floorNames,omitempty"`
	Kind         *string              `json:"kind,omitempty"`
}
