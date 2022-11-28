package shared

type VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance struct {
	CompanyName *string
	PolicyNo    *string
	ValidTill   *string
}

type VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle struct {
	ChasisNo         *string
	Class            map[string]interface{}
	Color            *string
	CubicCapacity    map[string]interface{}
	Cylinder         map[string]interface{}
	EngineNo         *string
	FitTill          map[string]interface{}
	FuelDesc         map[string]interface{}
	Make             map[string]interface{}
	MfgDate          map[string]interface{}
	Model            *string
	SeatCapacity     *string
	SleeperCapacity  *string
	StandingCapacity map[string]interface{}
	UnladenWeight    *string
	Wheelbase        map[string]interface{}
}

type VehicleRegistrationSchemaCertificateDataVehicleRegistration struct {
	Insurance  *VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance
	Vehicle    *VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle
	Financer   string
	NormsDesc  string
	StatusDate string
}

type VehicleRegistrationSchemaCertificateData struct {
	VehicleRegistration *VehicleRegistrationSchemaCertificateDataVehicleRegistration
}

type VehicleRegistrationSchemaIssuedByOrganizationAddress struct {
	Country  string
	District string
	House    string
	Landmark string
	Line1    string
	Line2    string
	Locality string
	Pin      string
	State    string
	Type     string
	Vtc      string
}

type VehicleRegistrationSchemaIssuedByOrganization struct {
	Address VehicleRegistrationSchemaIssuedByOrganizationAddress
	Code    string
	Name    string
	Tin     string
	Type    string
	UID     string
}

type VehicleRegistrationSchemaIssuedBy struct {
	Organization VehicleRegistrationSchemaIssuedByOrganization
}

type VehicleRegistrationSchemaIssuedToPersonAddress struct {
	Country  string
	District string
	House    string
	Landmark string
	Line1    string
	Line2    string
	Locality string
	Pin      string
	State    string
	Type     string
	Vtc      string
}

type VehicleRegistrationSchemaIssuedToPersonPhoto struct {
	Format string
}

type VehicleRegistrationSchemaIssuedToPerson struct {
	Address       VehicleRegistrationSchemaIssuedToPersonAddress
	Photo         VehicleRegistrationSchemaIssuedToPersonPhoto
	Dob           string
	Email         string
	Gender        string
	MaritalStatus string
	Name          string
	Phone         string
	Religion      string
	Swd           string
	SwdIndicator  string
	Title         string
	UID           string
}

type VehicleRegistrationSchemaIssuedTo struct {
	Person VehicleRegistrationSchemaIssuedToPerson
}

type VehicleRegistrationSchema struct {
	CertificateData VehicleRegistrationSchemaCertificateData
	IssuedBy        VehicleRegistrationSchemaIssuedBy
	IssuedTo        VehicleRegistrationSchemaIssuedTo
	ExpiryDate      *string
	IssueDate       string
	IssuedAt        string
	Language        string
	Name            string
	Number          int64
	Status          string
	Type            string
	ValidFromDate   string
}
