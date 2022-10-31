package shared

type GetLogGroupFieldsRequest struct {
	LogGroupName string `json:"logGroupName"`
	Time         *int64 `json:"time,omitempty"`
}
