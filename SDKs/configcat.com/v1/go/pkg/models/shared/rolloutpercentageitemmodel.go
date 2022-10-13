package shared

type RolloutPercentageItemModel struct {
	Percentage int64                  `json:"percentage"`
	Value      map[string]interface{} `json:"value"`
}
