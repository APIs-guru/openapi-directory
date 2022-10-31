package shared

type ResourceLocation struct {
	AvailabilityZone *string         `json:"availabilityZone,omitempty"`
	RegionName       *RegionNameEnum `json:"regionName,omitempty"`
}
