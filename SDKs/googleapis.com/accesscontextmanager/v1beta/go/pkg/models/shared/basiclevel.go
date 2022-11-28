package shared

type BasicLevelCombiningFunctionEnum string

const (
	BasicLevelCombiningFunctionEnumAnd BasicLevelCombiningFunctionEnum = "AND"
	BasicLevelCombiningFunctionEnumOr  BasicLevelCombiningFunctionEnum = "OR"
)

// BasicLevel
// `BasicLevel` is an `AccessLevel` using a set of recommended features.
type BasicLevel struct {
	CombiningFunction *BasicLevelCombiningFunctionEnum `json:"combiningFunction,omitempty"`
	Conditions        []Condition                      `json:"conditions,omitempty"`
}
