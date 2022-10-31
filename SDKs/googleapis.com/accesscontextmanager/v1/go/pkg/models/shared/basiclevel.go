package shared




type BasicLevelCombiningFunctionEnum string

const (
    BasicLevelCombiningFunctionEnumAnd BasicLevelCombiningFunctionEnum = "AND"
BasicLevelCombiningFunctionEnumOr BasicLevelCombiningFunctionEnum = "OR"
)


type BasicLevel struct {
    CombiningFunction *BasicLevelCombiningFunctionEnum `json:"combiningFunction,omitempty"`
    Conditions []Condition `json:"conditions,omitempty"`
    
}

