package shared

type BasicLevelCombiningFunctionEnum string

const (
	BasicLevelCombiningFunctionEnumAnd BasicLevelCombiningFunctionEnum = "AND"
	BasicLevelCombiningFunctionEnumOr  BasicLevelCombiningFunctionEnum = "OR"
)

type BasicLevel struct {
	CombiningFunction *BasicLevelCombiningFunctionEnum `json:"combiningFunction"`
	Conditions        []Condition                      `json:"conditions"`
}
