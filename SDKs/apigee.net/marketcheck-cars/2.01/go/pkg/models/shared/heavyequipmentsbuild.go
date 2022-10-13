package shared

type HeavyEquipmentsBuild struct {
	BodyType     *string `json:"body_type"`
	Category     *string `json:"category"`
	Condition    *string `json:"condition"`
	Drivetrain   *string `json:"drivetrain"`
	Engine       *string `json:"engine"`
	FuelType     *string `json:"fuel_type"`
	Make         *string `json:"make"`
	Model        *string `json:"model"`
	SubCategory  *string `json:"sub_category"`
	Transmission *string `json:"transmission"`
	Trim         *string `json:"trim"`
	Year         *int64  `json:"year"`
}
