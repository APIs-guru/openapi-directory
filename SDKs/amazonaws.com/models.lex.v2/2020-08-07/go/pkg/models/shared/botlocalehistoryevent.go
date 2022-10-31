package shared

import (
"time")

type BotLocaleHistoryEvent struct {
    Event string `json:"event"`
    EventDate time.Time `json:"eventDate"`
    
}

