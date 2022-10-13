package shared

type Building struct {
	Address      *BuildingAddress     `json:"address"`
	BuildingID   *string              `json:"buildingId"`
	BuildingName *string              `json:"buildingName"`
	Coordinates  *BuildingCoordinates `json:"coordinates"`
	Description  *string              `json:"description"`
	Etags        *string              `json:"etags"`
	FloorNames   []string             `json:"floorNames"`
	Kind         *string              `json:"kind"`
}
