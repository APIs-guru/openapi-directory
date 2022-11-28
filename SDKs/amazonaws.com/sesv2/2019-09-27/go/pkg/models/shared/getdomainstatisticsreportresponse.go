package shared

// GetDomainStatisticsReportResponse
// An object that includes statistics that are related to the domain that you specified.
type GetDomainStatisticsReportResponse struct {
	DailyVolumes  []DailyVolume `json:"DailyVolumes"`
	OverallVolume OverallVolume `json:"OverallVolume"`
}
