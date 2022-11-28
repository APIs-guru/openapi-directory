package shared

// DbClusterRole
// Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB cluster.
type DbClusterRole struct {
	FeatureName *string
	RoleArn     *string
	Status      *string
}
