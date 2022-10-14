package shared

import (
	"time"
)

type Workteam struct {
	CreateDate                *time.Time                 `json:"CreateDate,omitempty"`
	Description               string                     `json:"Description"`
	LastUpdatedDate           *time.Time                 `json:"LastUpdatedDate,omitempty"`
	MemberDefinitions         []MemberDefinition         `json:"MemberDefinitions"`
	NotificationConfiguration *NotificationConfiguration `json:"NotificationConfiguration,omitempty"`
	ProductListingIds         []string                   `json:"ProductListingIds,omitempty"`
	SubDomain                 *string                    `json:"SubDomain,omitempty"`
	WorkforceArn              *string                    `json:"WorkforceArn,omitempty"`
	WorkteamArn               string                     `json:"WorkteamArn"`
	WorkteamName              string                     `json:"WorkteamName"`
}
