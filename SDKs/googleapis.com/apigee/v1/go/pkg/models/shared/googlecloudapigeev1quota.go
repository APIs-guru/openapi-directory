package shared

type GoogleCloudApigeeV1Quota struct {
	Interval *string `json:"interval"`
	Limit    *string `json:"limit"`
	TimeUnit *string `json:"timeUnit"`
}
