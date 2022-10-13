package shared

import (
	"time"
)

type GetContactListResponse struct {
	ContactListName      *string    `json:"ContactListName"`
	CreatedTimestamp     *time.Time `json:"CreatedTimestamp"`
	Description          *string    `json:"Description"`
	LastUpdatedTimestamp *time.Time `json:"LastUpdatedTimestamp"`
	Tags                 []Tag      `json:"Tags"`
	Topics               []Topic    `json:"Topics"`
}
