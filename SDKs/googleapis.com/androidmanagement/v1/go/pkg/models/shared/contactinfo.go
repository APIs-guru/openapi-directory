package shared

type ContactInfo struct {
	ContactEmail               *string `json:"contactEmail"`
	DataProtectionOfficerEmail *string `json:"dataProtectionOfficerEmail"`
	DataProtectionOfficerName  *string `json:"dataProtectionOfficerName"`
	DataProtectionOfficerPhone *string `json:"dataProtectionOfficerPhone"`
	EuRepresentativeEmail      *string `json:"euRepresentativeEmail"`
	EuRepresentativeName       *string `json:"euRepresentativeName"`
	EuRepresentativePhone      *string `json:"euRepresentativePhone"`
}
