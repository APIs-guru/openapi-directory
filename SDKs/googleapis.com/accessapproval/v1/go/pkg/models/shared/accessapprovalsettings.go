package shared



type AccessApprovalSettings struct {
    ActiveKeyVersion *string `json:"activeKeyVersion,omitempty"`
    AncestorHasActiveKeyVersion *bool `json:"ancestorHasActiveKeyVersion,omitempty"`
    EnrolledAncestor *bool `json:"enrolledAncestor,omitempty"`
    EnrolledServices []EnrolledService `json:"enrolledServices,omitempty"`
    InvalidKeyVersion *bool `json:"invalidKeyVersion,omitempty"`
    Name *string `json:"name,omitempty"`
    NotificationEmails []string `json:"notificationEmails,omitempty"`
    
}

