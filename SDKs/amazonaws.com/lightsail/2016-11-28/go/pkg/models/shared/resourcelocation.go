package shared

// ResourceLocation
// Describes the resource location.
type ResourceLocation struct {
	AvailabilityZone *string         `json:"availabilityZone,omitempty"`
	RegionName       *RegionNameEnum `json:"regionName,omitempty"`
}
