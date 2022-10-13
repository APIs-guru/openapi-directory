package operations

type SingleMonitorPathParams struct {
	MonitorUID string `pathParam:"style=simple,explode=false,name=monitor_uid"`
}

type SingleMonitorRequest struct {
	PathParams SingleMonitorPathParams
}

type SingleMonitor200ApplicationJSONMonitorLastRunStatsAssertions struct {
	Failed *float64 `json:"failed"`
	Total  *float64 `json:"total"`
}

type SingleMonitor200ApplicationJSONMonitorLastRunStatsRequests struct {
	Total *float64 `json:"total"`
}

type SingleMonitor200ApplicationJSONMonitorLastRunStats struct {
	Assertions *SingleMonitor200ApplicationJSONMonitorLastRunStatsAssertions `json:"assertions"`
	Requests   *SingleMonitor200ApplicationJSONMonitorLastRunStatsRequests   `json:"requests"`
}

type SingleMonitor200ApplicationJSONMonitorLastRun struct {
	FinishedAt *string                                             `json:"finishedAt"`
	StartedAt  *string                                             `json:"startedAt"`
	Stats      *SingleMonitor200ApplicationJSONMonitorLastRunStats `json:"stats"`
	Status     *string                                             `json:"status"`
}

type SingleMonitor200ApplicationJSONMonitorNotificationsOnError struct {
	Email *string `json:"email"`
}

type SingleMonitor200ApplicationJSONMonitorNotificationsOnFailure struct {
	Email *string `json:"email"`
}

type SingleMonitor200ApplicationJSONMonitorNotifications struct {
	OnError   []SingleMonitor200ApplicationJSONMonitorNotificationsOnError   `json:"onError"`
	OnFailure []SingleMonitor200ApplicationJSONMonitorNotificationsOnFailure `json:"onFailure"`
}

type SingleMonitor200ApplicationJSONMonitorOptions struct {
	FollowRedirects *bool    `json:"followRedirects"`
	RequestDelay    *float64 `json:"requestDelay"`
	RequestTimeout  *float64 `json:"requestTimeout"`
	StrictSsl       *bool    `json:"strictSSL"`
}

type SingleMonitor200ApplicationJSONMonitorSchedule struct {
	Cron     *string `json:"cron"`
	NextRun  *string `json:"nextRun"`
	Timezone *string `json:"timezone"`
}

type SingleMonitor200ApplicationJSONMonitor struct {
	CollectionUID  *string                                              `json:"collectionUid"`
	Distribution   []interface{}                                        `json:"distribution"`
	EnvironmentUID *string                                              `json:"environmentUid"`
	ID             *string                                              `json:"id"`
	LastRun        *SingleMonitor200ApplicationJSONMonitorLastRun       `json:"lastRun"`
	Name           *string                                              `json:"name"`
	Notifications  *SingleMonitor200ApplicationJSONMonitorNotifications `json:"notifications"`
	Options        *SingleMonitor200ApplicationJSONMonitorOptions       `json:"options"`
	Owner          *string                                              `json:"owner"`
	Schedule       *SingleMonitor200ApplicationJSONMonitorSchedule      `json:"schedule"`
	UID            *string                                              `json:"uid"`
}

type SingleMonitor200ApplicationJSON struct {
	Monitor *SingleMonitor200ApplicationJSONMonitor `json:"monitor"`
}

type SingleMonitor404ApplicationJSONError struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}

type SingleMonitor404ApplicationJSON struct {
	Error *SingleMonitor404ApplicationJSONError `json:"error"`
}

type SingleMonitorResponse struct {
	ContentType                           string
	StatusCode                            int64
	SingleMonitor200ApplicationJSONObject *SingleMonitor200ApplicationJSON
	SingleMonitor404ApplicationJSONObject *SingleMonitor404ApplicationJSON
}
