package shared

type EnumOptionInsertRequest struct {
	AfterEnumOption  *string `json:"after_enum_option"`
	BeforeEnumOption *string `json:"before_enum_option"`
	EnumOption       string  `json:"enum_option"`
}
