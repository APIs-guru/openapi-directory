package shared

import (
"time")

type ItemScheduleList struct {
    ChannelID string `json:"channelId"`
    EndDate time.Time `json:"endDate"`
    Schedules []map[string]interface{} `json:"schedules"`
    StartDate time.Time `json:"startDate"`
    
}

