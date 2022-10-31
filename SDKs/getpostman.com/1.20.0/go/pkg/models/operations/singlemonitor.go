package operations

type SingleMonitorPathParams struct {
	MonitorUID string `pathParam:"style=simple,explode=false,name=monitor_uid"`
}

type SingleMonitorRequest struct {
	PathParams SingleMonitorPathParams
}

type SingleMonitor200ApplicationJSONMonitorLastRunStatsAssertions struct {
	Failed *float64 `json:"failed,omitempty"`
	Total  *float64 `json:"total,omitempty"`
}

type SingleMonitor200ApplicationJSONMonitorLastRunStatsRequests struct {
	Total *float64 `json:"total,omitempty"`
}

type SingleMonitor200ApplicationJSONMonitorLastRunStats struct {
	Assertions *SingleMonitor200ApplicationJSONMonitorLastRunStatsAssertions `json:"assertions,omitempty"`
	Requests   *SingleMonitor200ApplicationJSONMonitorLastRunStatsRequests   `json:"requests,omitempty"`
}

type SingleMonitor200ApplicationJSONMonitorLastRun struct {
	FinishedAt *string                                             `json:"finishedAt,omitempty"`
	StartedAt  *string                                             `json:"startedAt,omitempty"`
	Stats      *SingleMonitor200ApplicationJSONMonitorLastRunStats `json:"stats,omitempty"`
	Status     *string                                             `json:"status,omitempty"`
}

type SingleMonitor200ApplicationJSONMonitorNotificationsOnError struct {
	Email *string `json:"email,omitempty"`
}

type SingleMonitor200ApplicationJSONMonitorNotificationsOnFailure struct {
	Email *string `json:"email,omitempty"`
}

type SingleMonitor200ApplicationJSONMonitorNotifications struct {
	OnError   []SingleMonitor200ApplicationJSONMonitorNotificationsOnError   `json:"onError,omitempty"`
	OnFailure []SingleMonitor200ApplicationJSONMonitorNotificationsOnFailure `json:"onFailure,omitempty"`
}

type SingleMonitor200ApplicationJSONMonitorOptions struct {
	FollowRedirects *bool    `json:"followRedirects,omitempty"`
	RequestDelay    *float64 `json:"requestDelay,omitempty"`
	RequestTimeout  *float64 `json:"requestTimeout,omitempty"`
	StrictSsl       *bool    `json:"strictSSL,omitempty"`
}

type SingleMonitor200ApplicationJSONMonitorSchedule struct {
	Cron     *string `json:"cron,omitempty"`
	NextRun  *string `json:"nextRun,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
}

type SingleMonitor200ApplicationJSONMonitor struct {
	CollectionUID  *string                                              `json:"collectionUid,omitempty"`
	Distribution   []interface{}                                        `json:"distribution,omitempty"`
	EnvironmentUID *string                                              `json:"environmentUid,omitempty"`
	ID             *string                                              `json:"id,omitempty"`
	LastRun        *SingleMonitor200ApplicationJSONMonitorLastRun       `json:"lastRun,omitempty"`
	Name           *string                                              `json:"name,omitempty"`
	Notifications  *SingleMonitor200ApplicationJSONMonitorNotifications `json:"notifications,omitempty"`
	Options        *SingleMonitor200ApplicationJSONMonitorOptions       `json:"options,omitempty"`
	Owner          *string                                              `json:"owner,omitempty"`
	Schedule       *SingleMonitor200ApplicationJSONMonitorSchedule      `json:"schedule,omitempty"`
	UID            *string                                              `json:"uid,omitempty"`
}

type SingleMonitor200ApplicationJSON struct {
	Monitor *SingleMonitor200ApplicationJSONMonitor `json:"monitor,omitempty"`
}

type SingleMonitor404ApplicationJSONError struct {
	Message *string `json:"message,omitempty"`
	Name    *string `json:"name,omitempty"`
}

type SingleMonitor404ApplicationJSON struct {
	Error *SingleMonitor404ApplicationJSONError `json:"error,omitempty"`
}

type SingleMonitorResponse struct {
	ContentType                           string
	StatusCode                            int64
	SingleMonitor200ApplicationJSONObject *SingleMonitor200ApplicationJSON
	SingleMonitor404ApplicationJSONObject *SingleMonitor404ApplicationJSON
}
