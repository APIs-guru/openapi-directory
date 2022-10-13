package shared

type JobScheduleFrequency struct {
	DailySchedule   map[string]interface{} `json:"dailySchedule"`
	MonthlySchedule *MonthlySchedule       `json:"monthlySchedule"`
	WeeklySchedule  *WeeklySchedule        `json:"weeklySchedule"`
}
