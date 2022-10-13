package shared

type HoldoutActivity struct {
	NextActivity *string `json:"NextActivity"`
	Percentage   int64   `json:"Percentage"`
}
