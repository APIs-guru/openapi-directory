package shared

type DeleteMobileDeviceAccessRuleRequest struct {
	MobileDeviceAccessRuleID string `json:"MobileDeviceAccessRuleId"`
	OrganizationID           string `json:"OrganizationId"`
}
