package operations



type CreateMonitorRequestBodyMonitorSchedule struct {
    Cron *string `json:"cron,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    
}

type CreateMonitorRequestBodyMonitor struct {
    Collection *string `json:"collection,omitempty"`
    Environment *string `json:"environment,omitempty"`
    Name *string `json:"name,omitempty"`
    Schedule *CreateMonitorRequestBodyMonitorSchedule `json:"schedule,omitempty"`
    
}

type CreateMonitorRequestBody struct {
    Monitor *CreateMonitorRequestBodyMonitor `json:"monitor,omitempty"`
    
}

type CreateMonitorRequest struct {
    Request *CreateMonitorRequestBody `request:"mediaType=application/json"`
    
}

type CreateMonitor200ApplicationJSONMonitor struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type CreateMonitor200ApplicationJSON struct {
    Monitor *CreateMonitor200ApplicationJSONMonitor `json:"monitor,omitempty"`
    
}

type CreateMonitor400ApplicationJSONErrorDetails struct {
    Param *string `json:"param,omitempty"`
    
}

type CreateMonitor400ApplicationJSONError struct {
    Details *CreateMonitor400ApplicationJSONErrorDetails `json:"details,omitempty"`
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type CreateMonitor400ApplicationJSON struct {
    Error *CreateMonitor400ApplicationJSONError `json:"error,omitempty"`
    
}

type CreateMonitorResponse struct {
    ContentType string 
    StatusCode int64 
    CreateMonitor200ApplicationJSONObject *CreateMonitor200ApplicationJSON 
    CreateMonitor400ApplicationJSONObject *CreateMonitor400ApplicationJSON 
    
}

