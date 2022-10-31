package shared



type GenericResponse struct {
    BrandName *string `json:"brandName,omitempty"`
    CacheTimeLimit *int64 `json:"cacheTimeLimit,omitempty"`
    Condition *string `json:"condition,omitempty"`
    Data *interface{} `json:"data,omitempty"`
    ModelName *string `json:"modelName,omitempty"`
    Msg *string `json:"msg,omitempty"`
    RegionName *string `json:"regionName,omitempty"`
    
}

