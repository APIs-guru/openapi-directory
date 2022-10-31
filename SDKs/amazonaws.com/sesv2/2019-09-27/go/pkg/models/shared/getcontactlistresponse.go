package shared

import (
"time")

type GetContactListResponse struct {
    ContactListName *string `json:"ContactListName,omitempty"`
    CreatedTimestamp *time.Time `json:"CreatedTimestamp,omitempty"`
    Description *string `json:"Description,omitempty"`
    LastUpdatedTimestamp *time.Time `json:"LastUpdatedTimestamp,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    Topics []Topic `json:"Topics,omitempty"`
    
}

