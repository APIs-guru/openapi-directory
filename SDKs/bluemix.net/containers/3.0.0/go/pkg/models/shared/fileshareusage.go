package shared

type FileshareUsage struct {
	AvailableSpace      *string `json:"available_space"`
	TotalSpace          *string `json:"total_space"`
	UsedSpace           *string `json:"used_space"`
	UsedSpacePercentage *string `json:"used_space_percentage"`
}
