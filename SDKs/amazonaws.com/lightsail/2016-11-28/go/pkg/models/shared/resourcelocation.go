package shared

type ResourceLocation struct {
	AvailabilityZone *string         `json:"availabilityZone"`
	RegionName       *RegionNameEnum `json:"regionName"`
}
