package shared

type EnrolledServiceEnrollmentLevelEnum string

const (
	EnrolledServiceEnrollmentLevelEnumEnrollmentLevelUnspecified EnrolledServiceEnrollmentLevelEnum = "ENROLLMENT_LEVEL_UNSPECIFIED"
	EnrolledServiceEnrollmentLevelEnumBlockAll                   EnrolledServiceEnrollmentLevelEnum = "BLOCK_ALL"
)

type EnrolledService struct {
	CloudProduct    *string                             `json:"cloudProduct"`
	EnrollmentLevel *EnrolledServiceEnrollmentLevelEnum `json:"enrollmentLevel"`
}
