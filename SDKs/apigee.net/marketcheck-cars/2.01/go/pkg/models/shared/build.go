package shared

type Build struct {
	AntibrakeSys     *string  `json:"antibrake_sys"`
	BodySubtype      *string  `json:"body_subtype"`
	BodyType         *string  `json:"body_type"`
	CityMiles        *string  `json:"city_miles"`
	Cylinders        *int64   `json:"cylinders"`
	Doors            *int64   `json:"doors"`
	Drivetrain       *string  `json:"drivetrain"`
	Engine           *string  `json:"engine"`
	EngineAspiration *string  `json:"engine_aspiration"`
	EngineBlock      *string  `json:"engine_block"`
	EngineMeasure    *string  `json:"engine_measure"`
	EngineSize       *float64 `json:"engine_size"`
	FuelType         *string  `json:"fuel_type"`
	HighwayMiles     *string  `json:"highway_miles"`
	MadeIn           *string  `json:"made_in"`
	Make             *string  `json:"make"`
	Model            *string  `json:"model"`
	OptSeating       *string  `json:"opt_seating"`
	OverallHeight    *string  `json:"overall_height"`
	OverallLength    *string  `json:"overall_length"`
	OverallWidth     *string  `json:"overall_width"`
	ShortTrim        *string  `json:"short_trim"`
	StdSeating       *string  `json:"std_seating"`
	SteeringType     *string  `json:"steering_type"`
	TankSize         *string  `json:"tank_size"`
	Transmission     *string  `json:"transmission"`
	Trim             *string  `json:"trim"`
	TrimR            *string  `json:"trim_r"`
	VehicleType      *string  `json:"vehicle_type"`
	Year             *int64   `json:"year"`
}
