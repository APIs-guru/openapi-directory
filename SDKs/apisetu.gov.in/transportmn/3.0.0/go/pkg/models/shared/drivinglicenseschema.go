package shared

type DrivingLicenseSchemaCertificateDataDrivingLicense struct {
	Abbreviation string
	Code         string
	Description  string
	EndorseDate  string
	IssueDate    string
}

type DrivingLicenseSchemaCertificateData struct {
	DrivingLicense *DrivingLicenseSchemaCertificateDataDrivingLicense
}

type DrivingLicenseSchemaIssuedByOrganizationAddress struct {
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

type DrivingLicenseSchemaIssuedByOrganization struct {
	Address DrivingLicenseSchemaIssuedByOrganizationAddress
	Code    string
	Name    string
	Tin     string
	Type    string
	UID     string
}

type DrivingLicenseSchemaIssuedBy struct {
	Organization DrivingLicenseSchemaIssuedByOrganization
}

type DrivingLicenseSchemaIssuedToPersonAddress struct {
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

type DrivingLicenseSchemaIssuedToPersonPhoto struct {
	Format string
}

type DrivingLicenseSchemaIssuedToPerson struct {
	Address       DrivingLicenseSchemaIssuedToPersonAddress
	Photo         DrivingLicenseSchemaIssuedToPersonPhoto
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

type DrivingLicenseSchemaIssuedTo struct {
	Person DrivingLicenseSchemaIssuedToPerson
}

type DrivingLicenseSchema struct {
	CertificateData DrivingLicenseSchemaCertificateData
	IssuedBy        DrivingLicenseSchemaIssuedBy
	IssuedTo        DrivingLicenseSchemaIssuedTo
	ExpiryDate      *string
	IssueDate       string
	IssuedAt        string
	Language        string
	Name            string
	Number          int64
	PrevNumber      *int64
	Status          string
	Type            string
	ValidFromDate   string
}
