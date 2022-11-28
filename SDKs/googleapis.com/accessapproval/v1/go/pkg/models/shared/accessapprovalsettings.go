package shared

// AccessApprovalSettings
// Settings on a Project/Folder/Organization related to Access Approval.
type AccessApprovalSettings struct {
	ActiveKeyVersion            *string           `json:"activeKeyVersion,omitempty"`
	AncestorHasActiveKeyVersion *bool             `json:"ancestorHasActiveKeyVersion,omitempty"`
	EnrolledAncestor            *bool             `json:"enrolledAncestor,omitempty"`
	EnrolledServices            []EnrolledService `json:"enrolledServices,omitempty"`
	InvalidKeyVersion           *bool             `json:"invalidKeyVersion,omitempty"`
	Name                        *string           `json:"name,omitempty"`
	NotificationEmails          []string          `json:"notificationEmails,omitempty"`
}

// AccessApprovalSettingsInput
// Settings on a Project/Folder/Organization related to Access Approval.
type AccessApprovalSettingsInput struct {
	ActiveKeyVersion   *string           `json:"activeKeyVersion,omitempty"`
	EnrolledServices   []EnrolledService `json:"enrolledServices,omitempty"`
	Name               *string           `json:"name,omitempty"`
	NotificationEmails []string          `json:"notificationEmails,omitempty"`
}
