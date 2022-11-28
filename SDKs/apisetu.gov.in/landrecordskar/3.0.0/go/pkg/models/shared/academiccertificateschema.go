package shared

type AcademicCertificateSchemaCertificateDataExamination struct {
	Month string
	Name  string
	Year  string
}

type AcademicCertificateSchemaCertificateDataPerformanceSubjects struct {
	Code              string
	Gp                string
	GpMax             string
	Grade             string
	MarksMax          int64
	MarksMaxPractical int64
	MarksMaxTheory    int64
	MarksPractical    int64
	MarksTheory       int64
	MarksTotal        int64
	Name              string
}

type AcademicCertificateSchemaCertificateDataPerformance struct {
	Subjects   []AcademicCertificateSchemaCertificateDataPerformanceSubjects
	Cgpa       string
	CgpaMax    string
	Grade      string
	MarksMax   string
	MarksTotal string
	Percentage string
	Result     string
	ResultDate string
	UpdateDate string
}

type AcademicCertificateSchemaCertificateDataSchool struct {
	Code string
	Name string
}

type AcademicCertificateSchemaCertificateData struct {
	Examination AcademicCertificateSchemaCertificateDataExamination
	Performance AcademicCertificateSchemaCertificateDataPerformance
	School      AcademicCertificateSchemaCertificateDataSchool
}

type AcademicCertificateSchemaIssuedByOrganizationAddress struct {
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

type AcademicCertificateSchemaIssuedByOrganization struct {
	Address AcademicCertificateSchemaIssuedByOrganizationAddress
	Code    string
	Name    string
	Tin     string
	Type    string
	UID     string
}

type AcademicCertificateSchemaIssuedBy struct {
	Organization AcademicCertificateSchemaIssuedByOrganization
}

type AcademicCertificateSchemaIssuedToPersonAddress struct {
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

type AcademicCertificateSchemaIssuedToPersonPhoto struct {
	Format string
}

type AcademicCertificateSchemaIssuedToPerson struct {
	Address          AcademicCertificateSchemaIssuedToPersonAddress
	Photo            AcademicCertificateSchemaIssuedToPersonPhoto
	Category         string
	DisabilityStatus string
	Dob              string
	Email            string
	Gender           string
	MaritalStatus    string
	MotherName       string
	Name             string
	Phone            string
	Religion         string
	Swd              string
	SwdIndicator     string
	Title            string
	UID              string
}

type AcademicCertificateSchemaIssuedTo struct {
	Person AcademicCertificateSchemaIssuedToPerson
}

type AcademicCertificateSchema struct {
	CertificateData AcademicCertificateSchemaCertificateData
	IssuedBy        AcademicCertificateSchemaIssuedBy
	IssuedTo        AcademicCertificateSchemaIssuedTo
	IssueDate       string
	IssuedAt        string
	Language        string
	Name            string
	Number          int64
	Status          string
	Type            string
	ValidFromDate   string
}
