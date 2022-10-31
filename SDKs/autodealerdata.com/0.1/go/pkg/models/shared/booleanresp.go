package shared



type BooleanResp struct {
    BrandName *string `json:"brandName,omitempty"`
    CacheTimeLimit *int64 `json:"cacheTimeLimit,omitempty"`
    Condition *string `json:"condition,omitempty"`
    Data bool `json:"data"`
    ModelName *string `json:"modelName,omitempty"`
    Msg *string `json:"msg,omitempty"`
    RegionName *string `json:"regionName,omitempty"`
    
}

