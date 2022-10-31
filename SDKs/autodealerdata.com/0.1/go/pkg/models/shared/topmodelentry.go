package shared



type TopModelEntry struct {
    BrandMarketShare float64 `json:"brandMarketShare"`
    BrandName string `json:"brandName"`
    ModelName string `json:"modelName"`
    PercentOfBrandSales float64 `json:"percentOfBrandSales"`
    PercentOfTopSales float64 `json:"percentOfTopSales"`
    
}

