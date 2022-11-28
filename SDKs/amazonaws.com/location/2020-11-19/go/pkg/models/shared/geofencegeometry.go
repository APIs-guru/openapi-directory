package shared

// GeofenceGeometry
// <p>Contains the geofence geometry details.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
type GeofenceGeometry struct {
	Polygon [][][]float64 `json:"Polygon,omitempty"`
}
