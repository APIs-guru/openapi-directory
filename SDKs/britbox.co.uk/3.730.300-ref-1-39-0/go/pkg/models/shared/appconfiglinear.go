package shared



type AppConfigLinear struct {
    ScheduleCacheMaxAgeMinutes *int32 `json:"scheduleCacheMaxAgeMinutes,omitempty"`
    ViewingWindowDaysAfter *int32 `json:"viewingWindowDaysAfter,omitempty"`
    ViewingWindowDaysBefore *int32 `json:"viewingWindowDaysBefore,omitempty"`
    
}

