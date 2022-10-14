package shared

type CloudWatchLogsLogStream struct {
	BatchCount            *int64                             `json:"BatchCount,omitempty"`
	BatchSize             *int64                             `json:"BatchSize,omitempty"`
	BufferDuration        *int64                             `json:"BufferDuration,omitempty"`
	DatetimeFormat        *string                            `json:"DatetimeFormat,omitempty"`
	Encoding              *CloudWatchLogsEncodingEnum        `json:"Encoding,omitempty"`
	File                  *string                            `json:"File,omitempty"`
	FileFingerprintLines  *string                            `json:"FileFingerprintLines,omitempty"`
	InitialPosition       *CloudWatchLogsInitialPositionEnum `json:"InitialPosition,omitempty"`
	LogGroupName          *string                            `json:"LogGroupName,omitempty"`
	MultiLineStartPattern *string                            `json:"MultiLineStartPattern,omitempty"`
	TimeZone              *CloudWatchLogsTimeZoneEnum        `json:"TimeZone,omitempty"`
}
