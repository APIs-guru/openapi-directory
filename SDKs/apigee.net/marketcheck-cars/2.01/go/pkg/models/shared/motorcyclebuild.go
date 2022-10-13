package shared

type MotorcycleBuild struct {
	BodyType     *string `json:"body_type"`
	Cylinders    *int64  `json:"cylinders"`
	Drivetrain   *string `json:"drivetrain"`
	DryWeight    *string `json:"dry_weight"`
	Engine       *string `json:"engine"`
	FuelType     *string `json:"fuel_type"`
	MadeIn       *string `json:"made_in"`
	Make         *string `json:"make"`
	Model        *string `json:"model"`
	Transmission *string `json:"transmission"`
	Trim         *string `json:"trim"`
	VehicleType  *string `json:"vehicle_type"`
	Year         *int64  `json:"year"`
}
