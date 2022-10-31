package shared



type JobScheduleFrequency struct {
    DailySchedule map[string]interface{} `json:"dailySchedule,omitempty"`
    MonthlySchedule *MonthlySchedule `json:"monthlySchedule,omitempty"`
    WeeklySchedule *WeeklySchedule `json:"weeklySchedule,omitempty"`
    
}

