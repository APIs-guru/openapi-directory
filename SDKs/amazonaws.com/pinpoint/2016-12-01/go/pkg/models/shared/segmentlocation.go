package shared

type SegmentLocation struct {
	Country  *SetDimension      `json:"Country"`
	GpsPoint *GpsPointDimension `json:"GPSPoint"`
}
