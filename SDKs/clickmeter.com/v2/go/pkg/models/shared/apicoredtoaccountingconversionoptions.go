package shared



type APICoreDtoAccountingConversionOptions struct {
    HideComCost *bool `json:"hideComCost,omitempty" form:"name=hideComCost"`
    HideCost *bool `json:"hideCost,omitempty" form:"name=hideCost"`
    HideCount *bool `json:"hideCount,omitempty" form:"name=hideCount"`
    HideParams *bool `json:"hideParams,omitempty" form:"name=hideParams"`
    HideValue *bool `json:"hideValue,omitempty" form:"name=hideValue"`
    PercentCommission *int32 `json:"percentCommission,omitempty" form:"name=percentCommission"`
    PercentValue *int32 `json:"percentValue,omitempty" form:"name=percentValue"`
    
}

