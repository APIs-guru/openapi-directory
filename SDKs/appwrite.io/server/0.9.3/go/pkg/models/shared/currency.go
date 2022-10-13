package shared

type Currency struct {
	Code          string  `json:"code"`
	DecimalDigits int32   `json:"decimalDigits"`
	Name          string  `json:"name"`
	NamePlural    string  `json:"namePlural"`
	Rounding      float32 `json:"rounding"`
	Symbol        string  `json:"symbol"`
	SymbolNative  string  `json:"symbolNative"`
}
