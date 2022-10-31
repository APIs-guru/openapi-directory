package shared



type TimeSeriesFeedback struct {
    IsAnomaly *bool `json:"IsAnomaly,omitempty"`
    TimeSeriesID *string `json:"TimeSeriesId,omitempty"`
    
}

