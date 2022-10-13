package shared

type APICoreDtoRetargetingRetargetingScript struct {
	ID     *int64  `json:"id" form:"name=id"`
	Name   *string `json:"name" form:"name=name"`
	Script *string `json:"script" form:"name=script"`
}
