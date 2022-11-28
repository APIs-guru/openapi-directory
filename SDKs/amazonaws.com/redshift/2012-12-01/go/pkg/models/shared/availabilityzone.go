package shared

// AvailabilityZone
// Describes an availability zone.
type AvailabilityZone struct {
	Name               *string
	SupportedPlatforms []SupportedPlatform
}
