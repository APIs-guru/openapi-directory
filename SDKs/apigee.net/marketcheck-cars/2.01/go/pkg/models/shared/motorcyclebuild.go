package shared



type MotorcycleBuild struct {
    BodyType *string `json:"body_type,omitempty"`
    Cylinders *int64 `json:"cylinders,omitempty"`
    Drivetrain *string `json:"drivetrain,omitempty"`
    DryWeight *string `json:"dry_weight,omitempty"`
    Engine *string `json:"engine,omitempty"`
    FuelType *string `json:"fuel_type,omitempty"`
    MadeIn *string `json:"made_in,omitempty"`
    Make *string `json:"make,omitempty"`
    Model *string `json:"model,omitempty"`
    Transmission *string `json:"transmission,omitempty"`
    Trim *string `json:"trim,omitempty"`
    VehicleType *string `json:"vehicle_type,omitempty"`
    Year *int64 `json:"year,omitempty"`
    
}

