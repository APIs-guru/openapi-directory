package shared

type WorldCount struct {
	FloorplanCount            *int64 `json:"floorplanCount,omitempty"`
	InteriorCountPerFloorplan *int64 `json:"interiorCountPerFloorplan,omitempty"`
}
