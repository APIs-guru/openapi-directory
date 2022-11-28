package shared

type PanVerificationRecordSchemaCertificateDataPanVerificationRecord struct {
	Num        string
	VerifiedOn string
}

type PanVerificationRecordSchemaCertificateData struct {
	PanVerificationRecord *PanVerificationRecordSchemaCertificateDataPanVerificationRecord
}

type PanVerificationRecordSchemaIssuedByOrganizationAddress struct {
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

type PanVerificationRecordSchemaIssuedByOrganization struct {
	Address PanVerificationRecordSchemaIssuedByOrganizationAddress
	Code    string
	Name    string
	Tin     string
	Type    string
	UID     string
}

type PanVerificationRecordSchemaIssuedBy struct {
	Organization PanVerificationRecordSchemaIssuedByOrganization
}

type PanVerificationRecordSchemaIssuedToPersonAddress struct {
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

type PanVerificationRecordSchemaIssuedToPersonPhoto struct {
	Format string
}

type PanVerificationRecordSchemaIssuedToPerson struct {
	Address       PanVerificationRecordSchemaIssuedToPersonAddress
	Photo         PanVerificationRecordSchemaIssuedToPersonPhoto
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

type PanVerificationRecordSchemaIssuedTo struct {
	Person PanVerificationRecordSchemaIssuedToPerson
}

type PanVerificationRecordSchema struct {
	CertificateData PanVerificationRecordSchemaCertificateData
	IssuedBy        PanVerificationRecordSchemaIssuedBy
	IssuedTo        PanVerificationRecordSchemaIssuedTo
	IssueDate       string
	IssuedAt        string
	Language        string
	Name            string
	Number          string
	Status          string
	Type            string
	ValidFromDate   string
}
