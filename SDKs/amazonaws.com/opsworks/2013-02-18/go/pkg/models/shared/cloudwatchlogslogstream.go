package shared

type CloudWatchLogsLogStream struct {
	BatchCount            *int64                             `json:"BatchCount"`
	BatchSize             *int64                             `json:"BatchSize"`
	BufferDuration        *int64                             `json:"BufferDuration"`
	DatetimeFormat        *string                            `json:"DatetimeFormat"`
	Encoding              *CloudWatchLogsEncodingEnum        `json:"Encoding"`
	File                  *string                            `json:"File"`
	FileFingerprintLines  *string                            `json:"FileFingerprintLines"`
	InitialPosition       *CloudWatchLogsInitialPositionEnum `json:"InitialPosition"`
	LogGroupName          *string                            `json:"LogGroupName"`
	MultiLineStartPattern *string                            `json:"MultiLineStartPattern"`
	TimeZone              *CloudWatchLogsTimeZoneEnum        `json:"TimeZone"`
}
