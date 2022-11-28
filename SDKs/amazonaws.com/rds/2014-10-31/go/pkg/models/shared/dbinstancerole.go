package shared

// DbInstanceRole
// Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB instance.
type DbInstanceRole struct {
	FeatureName *string
	RoleArn     *string
	Status      *string
}
