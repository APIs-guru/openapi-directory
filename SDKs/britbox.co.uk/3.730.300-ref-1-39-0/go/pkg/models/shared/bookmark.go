package shared

import (
"time")

type Bookmark struct {
    CreationDate time.Time `json:"creationDate"`
    ItemID string `json:"itemId"`
    
}

