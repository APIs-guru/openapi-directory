package shared



type GetDomainStatisticsReportResponse struct {
    DailyVolumes []DailyVolume `json:"DailyVolumes"`
    OverallVolume OverallVolume `json:"OverallVolume"`
    
}

