package shared

type WorldCount struct {
	FloorplanCount            *int64 `json:"floorplanCount"`
	InteriorCountPerFloorplan *int64 `json:"interiorCountPerFloorplan"`
}
