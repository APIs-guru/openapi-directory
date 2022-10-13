package shared

type WorkTypeUpdateAPIModel struct {
	ID    *int32  `json:"Id" form:"name=Id"`
	Title *string `json:"Title" form:"name=Title"`
}
