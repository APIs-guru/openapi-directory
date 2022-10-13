package shared

type Currency struct {
	Code   *string `json:"Code" form:"name=Code"`
	ID     *int32  `json:"Id" form:"name=Id"`
	Name   *string `json:"Name" form:"name=Name"`
	Symbol *string `json:"Symbol" form:"name=Symbol"`
	Value  *string `json:"Value" form:"name=Value"`
}
