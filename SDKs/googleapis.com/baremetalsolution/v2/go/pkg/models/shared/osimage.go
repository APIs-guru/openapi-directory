package shared

type OsImage struct {
	ApplicableInstanceTypes   []string                `json:"applicableInstanceTypes"`
	Code                      *string                 `json:"code"`
	Description               *string                 `json:"description"`
	Name                      *string                 `json:"name"`
	SupportedNetworkTemplates []ServerNetworkTemplate `json:"supportedNetworkTemplates"`
}
