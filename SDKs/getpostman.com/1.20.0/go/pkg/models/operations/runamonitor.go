package operations

type RunAMonitorPathParams struct {
	MonitorUID string `pathParam:"style=simple,explode=false,name=monitor_uid"`
}

type RunAMonitorRequest struct {
	PathParams RunAMonitorPathParams
}

type RunAMonitor200ApplicationJSONRunExecutionsItem struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
}

type RunAMonitor200ApplicationJSONRunExecutionsRequestBody struct {
	ContentLength *float64 `json:"contentLength"`
	Mode          *string  `json:"mode"`
}

type RunAMonitor200ApplicationJSONRunExecutionsRequestHeaders struct {
	Accept         *string  `json:"accept"`
	AcceptEncoding *string  `json:"accept-encoding"`
	ContentLength  *float64 `json:"content-length"`
	ContentType    *string  `json:"content-type"`
}

type RunAMonitor200ApplicationJSONRunExecutionsRequest struct {
	Body      *RunAMonitor200ApplicationJSONRunExecutionsRequestBody    `json:"body"`
	Headers   *RunAMonitor200ApplicationJSONRunExecutionsRequestHeaders `json:"headers"`
	Method    *string                                                   `json:"method"`
	Timestamp *string                                                   `json:"timestamp"`
	URL       *string                                                   `json:"url"`
}

type RunAMonitor200ApplicationJSONRunExecutionsResponseBody struct {
	ContentLength *float64 `json:"contentLength"`
}

type RunAMonitor200ApplicationJSONRunExecutionsResponseHeaders struct {
	Connection       *string `json:"connection"`
	ContentEncoding  *string `json:"content-encoding"`
	ContentType      *string `json:"content-type"`
	Date             *string `json:"date"`
	TransferEncoding *string `json:"transfer-encoding"`
}

type RunAMonitor200ApplicationJSONRunExecutionsResponse struct {
	Body         *RunAMonitor200ApplicationJSONRunExecutionsResponseBody    `json:"body"`
	Code         *float64                                                   `json:"code"`
	Headers      *RunAMonitor200ApplicationJSONRunExecutionsResponseHeaders `json:"headers"`
	ResponseSize *float64                                                   `json:"responseSize"`
	ResponseTime *float64                                                   `json:"responseTime"`
}

type RunAMonitor200ApplicationJSONRunExecutions struct {
	ID       *float64                                            `json:"id"`
	Item     *RunAMonitor200ApplicationJSONRunExecutionsItem     `json:"item"`
	Request  *RunAMonitor200ApplicationJSONRunExecutionsRequest  `json:"request"`
	Response *RunAMonitor200ApplicationJSONRunExecutionsResponse `json:"response"`
}

type RunAMonitor200ApplicationJSONRunFailuresAssertion struct {
	StatusCodeIs400 *bool `json:"Status code is 400"`
}

type RunAMonitor200ApplicationJSONRunFailures struct {
	Assertion   *RunAMonitor200ApplicationJSONRunFailuresAssertion `json:"assertion"`
	ExecutionID *float64                                           `json:"executionId"`
	Message     *string                                            `json:"message"`
	Name        *string                                            `json:"name"`
}

type RunAMonitor200ApplicationJSONRunInfo struct {
	CollectionUID *string `json:"collectionUid"`
	FinishedAt    *string `json:"finishedAt"`
	JobID         *string `json:"jobId"`
	MonitorID     *string `json:"monitorId"`
	Name          *string `json:"name"`
	StartedAt     *string `json:"startedAt"`
	Status        *string `json:"status"`
}

type RunAMonitor200ApplicationJSONRunStatsAssertions struct {
	Failed *float64 `json:"failed"`
	Total  *float64 `json:"total"`
}

type RunAMonitor200ApplicationJSONRunStatsRequests struct {
	Failed *float64 `json:"failed"`
	Total  *float64 `json:"total"`
}

type RunAMonitor200ApplicationJSONRunStats struct {
	Assertions *RunAMonitor200ApplicationJSONRunStatsAssertions `json:"assertions"`
	Requests   *RunAMonitor200ApplicationJSONRunStatsRequests   `json:"requests"`
}

type RunAMonitor200ApplicationJSONRun struct {
	Executions []RunAMonitor200ApplicationJSONRunExecutions `json:"executions"`
	Failures   []RunAMonitor200ApplicationJSONRunFailures   `json:"failures"`
	Info       *RunAMonitor200ApplicationJSONRunInfo        `json:"info"`
	Stats      *RunAMonitor200ApplicationJSONRunStats       `json:"stats"`
}

type RunAMonitor200ApplicationJSON struct {
	Run *RunAMonitor200ApplicationJSONRun `json:"run"`
}

type RunAMonitorResponse struct {
	ContentType                         string
	StatusCode                          int64
	RunAMonitor200ApplicationJSONObject *RunAMonitor200ApplicationJSON
}
