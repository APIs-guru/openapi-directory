package shared

import (
	"time"
)

// AccessControlRule
// A rule that controls access to an Amazon WorkMail organization.
type AccessControlRule struct {
	Actions      []string                     `json:"Actions,omitempty"`
	DateCreated  *time.Time                   `json:"DateCreated,omitempty"`
	DateModified *time.Time                   `json:"DateModified,omitempty"`
	Description  *string                      `json:"Description,omitempty"`
	Effect       *AccessControlRuleEffectEnum `json:"Effect,omitempty"`
	IPRanges     []string                     `json:"IpRanges,omitempty"`
	Name         *string                      `json:"Name,omitempty"`
	NotActions   []string                     `json:"NotActions,omitempty"`
	NotIPRanges  []string                     `json:"NotIpRanges,omitempty"`
	NotUserIds   []string                     `json:"NotUserIds,omitempty"`
	UserIds      []string                     `json:"UserIds,omitempty"`
}
