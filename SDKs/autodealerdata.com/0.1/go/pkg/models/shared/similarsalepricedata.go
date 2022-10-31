package shared



type SimilarSalePriceData struct {
    DaysBack int64 `json:"daysBack"`
    MileCount int64 `json:"mileCount"`
    MilesAvg float64 `json:"milesAvg"`
    MilesStdDev float64 `json:"milesStdDev"`
    NewCount int64 `json:"newCount"`
    NewSaleAvg float64 `json:"newSaleAvg"`
    NewSaleStdDev float64 `json:"newSaleStdDev"`
    UsedCount int64 `json:"usedCount"`
    UsedSaleAvg float64 `json:"usedSaleAvg"`
    UsedSaleStdDev float64 `json:"usedSaleStdDev"`
    
}

