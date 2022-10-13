package shared

type ModelResp struct {
	BrandName      *string     `json:"brandName"`
	CacheTimeLimit *int64      `json:"cacheTimeLimit"`
	Condition      *string     `json:"condition"`
	Data           []ModelDict `json:"data"`
	ModelName      *string     `json:"modelName"`
	Msg            *string     `json:"msg"`
	RegionName     *string     `json:"regionName"`
}
