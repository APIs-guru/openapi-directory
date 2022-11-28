package shared

// AccountLevelPermissions
// Provides information about the account-level permissions settings that apply to an S3 bucket.
type AccountLevelPermissions struct {
	BlockPublicAccess *BlockPublicAccess `json:"blockPublicAccess,omitempty"`
}
