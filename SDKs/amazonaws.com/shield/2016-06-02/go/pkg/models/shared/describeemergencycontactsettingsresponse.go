package shared

type DescribeEmergencyContactSettingsResponse struct {
	EmergencyContactList []EmergencyContact `json:"EmergencyContactList,omitempty"`
}
