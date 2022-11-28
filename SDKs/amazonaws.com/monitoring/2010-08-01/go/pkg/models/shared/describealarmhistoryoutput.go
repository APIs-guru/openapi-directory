package shared

type DescribeAlarmHistoryOutput struct {
	AlarmHistoryItems []AlarmHistoryItem
	NextToken         *string
}
