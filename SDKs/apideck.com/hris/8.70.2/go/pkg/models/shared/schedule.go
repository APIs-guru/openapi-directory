package shared



type ScheduleWorkPatternEvenWeeks struct {
    HoursFriday *float64 `json:"hours_friday,omitempty"`
    HoursMonday *float64 `json:"hours_monday,omitempty"`
    HoursSaturday *float64 `json:"hours_saturday,omitempty"`
    HoursSunday *float64 `json:"hours_sunday,omitempty"`
    HoursThursday *float64 `json:"hours_thursday,omitempty"`
    HoursTuesday *float64 `json:"hours_tuesday,omitempty"`
    HoursWednesday *float64 `json:"hours_wednesday,omitempty"`
    
}

type ScheduleWorkPatternOddWeeks struct {
    HoursFriday *float64 `json:"hours_friday,omitempty"`
    HoursMonday *float64 `json:"hours_monday,omitempty"`
    HoursSaturday *float64 `json:"hours_saturday,omitempty"`
    HoursSunday *float64 `json:"hours_sunday,omitempty"`
    HoursThursday *float64 `json:"hours_thursday,omitempty"`
    HoursTuesday *float64 `json:"hours_tuesday,omitempty"`
    HoursWednesday *float64 `json:"hours_wednesday,omitempty"`
    
}

type ScheduleWorkPattern struct {
    EvenWeeks *ScheduleWorkPatternEvenWeeks `json:"even_weeks,omitempty"`
    OddWeeks *ScheduleWorkPatternOddWeeks `json:"odd_weeks,omitempty"`
    
}

type Schedule struct {
    EndDate string `json:"end_date"`
    ID string `json:"id"`
    StartDate string `json:"start_date"`
    WorkPattern ScheduleWorkPattern `json:"work_pattern"`
    
}

