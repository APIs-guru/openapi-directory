package shared

import (
"time")

type ActivityListItem struct {
    ActivityArn string `json:"activityArn"`
    CreationDate time.Time `json:"creationDate"`
    Name string `json:"name"`
    
}

