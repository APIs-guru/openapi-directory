package shared

// AllowedPublishers
// List of signing profiles that can sign a code package.
type AllowedPublishers struct {
	SigningProfileVersionArns []string `json:"SigningProfileVersionArns"`
}
