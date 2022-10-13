package shared

type AccessApprovalSettings struct {
	ActiveKeyVersion            *string           `json:"activeKeyVersion"`
	AncestorHasActiveKeyVersion *bool             `json:"ancestorHasActiveKeyVersion"`
	EnrolledAncestor            *bool             `json:"enrolledAncestor"`
	EnrolledServices            []EnrolledService `json:"enrolledServices"`
	InvalidKeyVersion           *bool             `json:"invalidKeyVersion"`
	Name                        *string           `json:"name"`
	NotificationEmails          []string          `json:"notificationEmails"`
}
