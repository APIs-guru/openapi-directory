package operations

type RunAMonitorPathParams struct {
	MonitorUID string `pathParam:"style=simple,explode=false,name=monitor_uid"`
}

type RunAMonitor200ApplicationJSONRunExecutionsItem struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type RunAMonitor200ApplicationJSONRunExecutionsRequestBody struct {
	ContentLength *float64 `json:"contentLength,omitempty"`
	Mode          *string  `json:"mode,omitempty"`
}

type RunAMonitor200ApplicationJSONRunExecutionsRequestHeaders struct {
	Accept         *string  `json:"accept,omitempty"`
	AcceptEncoding *string  `json:"accept-encoding,omitempty"`
	ContentLength  *float64 `json:"content-length,omitempty"`
	ContentType    *string  `json:"content-type,omitempty"`
}

type RunAMonitor200ApplicationJSONRunExecutionsRequest struct {
	Body      *RunAMonitor200ApplicationJSONRunExecutionsRequestBody    `json:"body,omitempty"`
	Headers   *RunAMonitor200ApplicationJSONRunExecutionsRequestHeaders `json:"headers,omitempty"`
	Method    *string                                                   `json:"method,omitempty"`
	Timestamp *string                                                   `json:"timestamp,omitempty"`
	URL       *string                                                   `json:"url,omitempty"`
}

type RunAMonitor200ApplicationJSONRunExecutionsResponseBody struct {
	ContentLength *float64 `json:"contentLength,omitempty"`
}

type RunAMonitor200ApplicationJSONRunExecutionsResponseHeaders struct {
	Connection       *string `json:"connection,omitempty"`
	ContentEncoding  *string `json:"content-encoding,omitempty"`
	ContentType      *string `json:"content-type,omitempty"`
	Date             *string `json:"date,omitempty"`
	TransferEncoding *string `json:"transfer-encoding,omitempty"`
}

type RunAMonitor200ApplicationJSONRunExecutionsResponse struct {
	Body         *RunAMonitor200ApplicationJSONRunExecutionsResponseBody    `json:"body,omitempty"`
	Code         *float64                                                   `json:"code,omitempty"`
	Headers      *RunAMonitor200ApplicationJSONRunExecutionsResponseHeaders `json:"headers,omitempty"`
	ResponseSize *float64                                                   `json:"responseSize,omitempty"`
	ResponseTime *float64                                                   `json:"responseTime,omitempty"`
}

type RunAMonitor200ApplicationJSONRunExecutions struct {
	ID       *float64                                            `json:"id,omitempty"`
	Item     *RunAMonitor200ApplicationJSONRunExecutionsItem     `json:"item,omitempty"`
	Request  *RunAMonitor200ApplicationJSONRunExecutionsRequest  `json:"request,omitempty"`
	Response *RunAMonitor200ApplicationJSONRunExecutionsResponse `json:"response,omitempty"`
}

type RunAMonitor200ApplicationJSONRunFailuresAssertion struct {
	StatusCodeIs400 *bool `json:"Status code is 400,omitempty"`
}

type RunAMonitor200ApplicationJSONRunFailures struct {
	Assertion   *RunAMonitor200ApplicationJSONRunFailuresAssertion `json:"assertion,omitempty"`
	ExecutionID *float64                                           `json:"executionId,omitempty"`
	Message     *string                                            `json:"message,omitempty"`
	Name        *string                                            `json:"name,omitempty"`
}

type RunAMonitor200ApplicationJSONRunInfo struct {
	CollectionUID *string `json:"collectionUid,omitempty"`
	FinishedAt    *string `json:"finishedAt,omitempty"`
	JobID         *string `json:"jobId,omitempty"`
	MonitorID     *string `json:"monitorId,omitempty"`
	Name          *string `json:"name,omitempty"`
	StartedAt     *string `json:"startedAt,omitempty"`
	Status        *string `json:"status,omitempty"`
}

type RunAMonitor200ApplicationJSONRunStatsAssertions struct {
	Failed *float64 `json:"failed,omitempty"`
	Total  *float64 `json:"total,omitempty"`
}

type RunAMonitor200ApplicationJSONRunStatsRequests struct {
	Failed *float64 `json:"failed,omitempty"`
	Total  *float64 `json:"total,omitempty"`
}

type RunAMonitor200ApplicationJSONRunStats struct {
	Assertions *RunAMonitor200ApplicationJSONRunStatsAssertions `json:"assertions,omitempty"`
	Requests   *RunAMonitor200ApplicationJSONRunStatsRequests   `json:"requests,omitempty"`
}

type RunAMonitor200ApplicationJSONRun struct {
	Executions []RunAMonitor200ApplicationJSONRunExecutions `json:"executions,omitempty"`
	Failures   []RunAMonitor200ApplicationJSONRunFailures   `json:"failures,omitempty"`
	Info       *RunAMonitor200ApplicationJSONRunInfo        `json:"info,omitempty"`
	Stats      *RunAMonitor200ApplicationJSONRunStats       `json:"stats,omitempty"`
}

type RunAMonitor200ApplicationJSON struct {
	Run *RunAMonitor200ApplicationJSONRun `json:"run,omitempty"`
}

type RunAMonitorRequest struct {
	PathParams RunAMonitorPathParams
}

type RunAMonitorResponse struct {
	ContentType                         string
	StatusCode                          int64
	RunAMonitor200ApplicationJSONObject *RunAMonitor200ApplicationJSON
}
