package shared

type Usd struct {
	Cents                 *int64 `json:"Cents"`
	Dollars               *int64 `json:"Dollars"`
	TenthFractionsOfACent *int64 `json:"TenthFractionsOfACent"`
}
