package shared



type SetEqualizerValuesRequest struct {
    HighShelf HighShelf1 `json:"high_shelf"`
    LowShelf LowShelf1 `json:"low_shelf"`
    
}

