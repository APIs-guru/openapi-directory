package shared



type CalendarDate struct {
    AllDay *bool `json:"all_day,omitempty"`
    CalendarCategoryID *int32 `json:"calendar_category_id,omitempty"`
    Category *string `json:"category,omitempty"`
    Description *string `json:"description,omitempty"`
    EndDate *string `json:"end_date,omitempty"`
    EventID *int32 `json:"event_id,omitempty"`
    Location *string `json:"location,omitempty"`
    StartDate *string `json:"start_date,omitempty"`
    State []string `json:"state,omitempty"`
    Summary *string `json:"summary,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

