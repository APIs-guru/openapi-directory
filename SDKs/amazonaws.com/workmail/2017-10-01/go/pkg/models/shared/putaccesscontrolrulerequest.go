package shared

type PutAccessControlRuleRequest struct {
	Actions        []string                    `json:"Actions"`
	Description    string                      `json:"Description"`
	Effect         AccessControlRuleEffectEnum `json:"Effect"`
	IPRanges       []string                    `json:"IpRanges"`
	Name           string                      `json:"Name"`
	NotActions     []string                    `json:"NotActions"`
	NotIPRanges    []string                    `json:"NotIpRanges"`
	NotUserIds     []string                    `json:"NotUserIds"`
	OrganizationID string                      `json:"OrganizationId"`
	UserIds        []string                    `json:"UserIds"`
}
