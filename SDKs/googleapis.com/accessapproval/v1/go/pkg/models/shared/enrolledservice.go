package shared

type EnrolledServiceEnrollmentLevelEnum string

const (
	EnrolledServiceEnrollmentLevelEnumEnrollmentLevelUnspecified EnrolledServiceEnrollmentLevelEnum = "ENROLLMENT_LEVEL_UNSPECIFIED"
	EnrolledServiceEnrollmentLevelEnumBlockAll                   EnrolledServiceEnrollmentLevelEnum = "BLOCK_ALL"
)

// EnrolledService
// Represents the enrollment of a cloud resource into a specific service.
type EnrolledService struct {
	CloudProduct    *string                             `json:"cloudProduct,omitempty"`
	EnrollmentLevel *EnrolledServiceEnrollmentLevelEnum `json:"enrollmentLevel,omitempty"`
}
