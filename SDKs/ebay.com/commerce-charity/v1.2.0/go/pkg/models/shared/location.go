package shared

type Location struct {
	Address        *Address        `json:"address"`
	GeoCoordinates *GeoCoordinates `json:"geoCoordinates"`
}
