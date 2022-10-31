package shared



type GetDeliverabilityTestReportResponse struct {
    DeliverabilityTestReport DeliverabilityTestReport `json:"DeliverabilityTestReport"`
    IspPlacements []IspPlacement `json:"IspPlacements"`
    Message *string `json:"Message,omitempty"`
    OverallPlacement PlacementStatistics `json:"OverallPlacement"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

