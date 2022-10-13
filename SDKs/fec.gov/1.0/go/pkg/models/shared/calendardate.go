package shared

type CalendarDate struct {
	AllDay             *bool    `json:"all_day"`
	CalendarCategoryID *int32   `json:"calendar_category_id"`
	Category           *string  `json:"category"`
	Description        *string  `json:"description"`
	EndDate            *string  `json:"end_date"`
	EventID            *int32   `json:"event_id"`
	Location           *string  `json:"location"`
	StartDate          *string  `json:"start_date"`
	State              []string `json:"state"`
	Summary            *string  `json:"summary"`
	URL                *string  `json:"url"`
}
