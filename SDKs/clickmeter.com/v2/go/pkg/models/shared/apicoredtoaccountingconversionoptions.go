package shared

type APICoreDtoAccountingConversionOptions struct {
	HideComCost       *bool  `json:"hideComCost" form:"name=hideComCost"`
	HideCost          *bool  `json:"hideCost" form:"name=hideCost"`
	HideCount         *bool  `json:"hideCount" form:"name=hideCount"`
	HideParams        *bool  `json:"hideParams" form:"name=hideParams"`
	HideValue         *bool  `json:"hideValue" form:"name=hideValue"`
	PercentCommission *int32 `json:"percentCommission" form:"name=percentCommission"`
	PercentValue      *int32 `json:"percentValue" form:"name=percentValue"`
}
