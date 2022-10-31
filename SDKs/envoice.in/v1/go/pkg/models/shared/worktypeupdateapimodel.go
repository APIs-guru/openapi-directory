package shared

type WorkTypeUpdateAPIModel struct {
	ID    *int32  `json:"Id,omitempty" form:"name=Id"`
	Title *string `json:"Title,omitempty" form:"name=Title"`
}
