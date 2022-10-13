package shared

type GpsPointDimension struct {
	Coordinates       GpsCoordinates `json:"Coordinates"`
	RangeInKilometers *float64       `json:"RangeInKilometers"`
}
