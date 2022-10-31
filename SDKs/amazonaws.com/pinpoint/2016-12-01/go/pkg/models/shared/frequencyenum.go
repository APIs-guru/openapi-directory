package shared

type FrequencyEnum string

const (
	FrequencyEnumOnce       FrequencyEnum = "ONCE"
	FrequencyEnumHourly     FrequencyEnum = "HOURLY"
	FrequencyEnumDaily      FrequencyEnum = "DAILY"
	FrequencyEnumWeekly     FrequencyEnum = "WEEKLY"
	FrequencyEnumMonthly    FrequencyEnum = "MONTHLY"
	FrequencyEnumEvent      FrequencyEnum = "EVENT"
	FrequencyEnumInAppEvent FrequencyEnum = "IN_APP_EVENT"
)
