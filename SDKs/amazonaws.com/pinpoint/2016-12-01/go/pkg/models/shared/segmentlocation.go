package shared

type SegmentLocation struct {
	Country  *SetDimension      `json:"Country,omitempty"`
	GpsPoint *GpsPointDimension `json:"GPSPoint,omitempty"`
}
