package shared

type Build struct {
	AntibrakeSys     *string  `json:"antibrake_sys,omitempty"`
	BodySubtype      *string  `json:"body_subtype,omitempty"`
	BodyType         *string  `json:"body_type,omitempty"`
	CityMiles        *string  `json:"city_miles,omitempty"`
	Cylinders        *int64   `json:"cylinders,omitempty"`
	Doors            *int64   `json:"doors,omitempty"`
	Drivetrain       *string  `json:"drivetrain,omitempty"`
	Engine           *string  `json:"engine,omitempty"`
	EngineAspiration *string  `json:"engine_aspiration,omitempty"`
	EngineBlock      *string  `json:"engine_block,omitempty"`
	EngineMeasure    *string  `json:"engine_measure,omitempty"`
	EngineSize       *float64 `json:"engine_size,omitempty"`
	FuelType         *string  `json:"fuel_type,omitempty"`
	HighwayMiles     *string  `json:"highway_miles,omitempty"`
	MadeIn           *string  `json:"made_in,omitempty"`
	Make             *string  `json:"make,omitempty"`
	Model            *string  `json:"model,omitempty"`
	OptSeating       *string  `json:"opt_seating,omitempty"`
	OverallHeight    *string  `json:"overall_height,omitempty"`
	OverallLength    *string  `json:"overall_length,omitempty"`
	OverallWidth     *string  `json:"overall_width,omitempty"`
	ShortTrim        *string  `json:"short_trim,omitempty"`
	StdSeating       *string  `json:"std_seating,omitempty"`
	SteeringType     *string  `json:"steering_type,omitempty"`
	TankSize         *string  `json:"tank_size,omitempty"`
	Transmission     *string  `json:"transmission,omitempty"`
	Trim             *string  `json:"trim,omitempty"`
	TrimR            *string  `json:"trim_r,omitempty"`
	VehicleType      *string  `json:"vehicle_type,omitempty"`
	Year             *int64   `json:"year,omitempty"`
}
