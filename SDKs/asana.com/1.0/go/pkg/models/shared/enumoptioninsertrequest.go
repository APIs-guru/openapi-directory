package shared

type EnumOptionInsertRequest struct {
	AfterEnumOption  *string `json:"after_enum_option,omitempty"`
	BeforeEnumOption *string `json:"before_enum_option,omitempty"`
	EnumOption       string  `json:"enum_option"`
}
