package shared

type Principal struct {
	Arn     *string `json:"arn"`
	Service *string `json:"service"`
}
