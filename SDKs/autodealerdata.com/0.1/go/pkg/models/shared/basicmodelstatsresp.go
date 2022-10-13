package shared

type BasicModelStatsResp struct {
	BrandName      *string           `json:"brandName"`
	CacheTimeLimit *int64            `json:"cacheTimeLimit"`
	Condition      *string           `json:"condition"`
	Data           []BasicModelStats `json:"data"`
	ModelName      *string           `json:"modelName"`
	Msg            *string           `json:"msg"`
	RegionName     *string           `json:"regionName"`
}
