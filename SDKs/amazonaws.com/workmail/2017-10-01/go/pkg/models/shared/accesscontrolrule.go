package shared

import (
	"time"
)

type AccessControlRule struct {
	Actions      []string                     `json:"Actions"`
	DateCreated  *time.Time                   `json:"DateCreated"`
	DateModified *time.Time                   `json:"DateModified"`
	Description  *string                      `json:"Description"`
	Effect       *AccessControlRuleEffectEnum `json:"Effect"`
	IPRanges     []string                     `json:"IpRanges"`
	Name         *string                      `json:"Name"`
	NotActions   []string                     `json:"NotActions"`
	NotIPRanges  []string                     `json:"NotIpRanges"`
	NotUserIds   []string                     `json:"NotUserIds"`
	UserIds      []string                     `json:"UserIds"`
}
