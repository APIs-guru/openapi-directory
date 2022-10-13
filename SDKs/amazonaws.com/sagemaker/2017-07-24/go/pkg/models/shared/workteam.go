package shared

import (
	"time"
)

type Workteam struct {
	CreateDate                *time.Time                 `json:"CreateDate"`
	Description               string                     `json:"Description"`
	LastUpdatedDate           *time.Time                 `json:"LastUpdatedDate"`
	MemberDefinitions         []MemberDefinition         `json:"MemberDefinitions"`
	NotificationConfiguration *NotificationConfiguration `json:"NotificationConfiguration"`
	ProductListingIds         []string                   `json:"ProductListingIds"`
	SubDomain                 *string                    `json:"SubDomain"`
	WorkforceArn              *string                    `json:"WorkforceArn"`
	WorkteamArn               string                     `json:"WorkteamArn"`
	WorkteamName              string                     `json:"WorkteamName"`
}
