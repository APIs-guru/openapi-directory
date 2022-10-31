package shared

type OpenIDProvider struct {
	ID                int32   `json:"id"`
	IsGlobalAvailable bool    `json:"isGlobalAvailable"`
	Issuer            string  `json:"issuer"`
	MappingClaim      string  `json:"mappingClaim"`
	Name              string  `json:"name"`
	UserManagementURL *string `json:"userManagementUrl,omitempty"`
}
