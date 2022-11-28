package shared

// HeavyEquipmentsBuild
// Describes the Heavy Equipments specification
type HeavyEquipmentsBuild struct {
	BodyType     *string `json:"body_type,omitempty"`
	Category     *string `json:"category,omitempty"`
	Condition    *string `json:"condition,omitempty"`
	Drivetrain   *string `json:"drivetrain,omitempty"`
	Engine       *string `json:"engine,omitempty"`
	FuelType     *string `json:"fuel_type,omitempty"`
	Make         *string `json:"make,omitempty"`
	Model        *string `json:"model,omitempty"`
	SubCategory  *string `json:"sub_category,omitempty"`
	Transmission *string `json:"transmission,omitempty"`
	Trim         *string `json:"trim,omitempty"`
	Year         *int64  `json:"year,omitempty"`
}
