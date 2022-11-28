package shared

// AppPkgInfo
// 'The data type AppPkgInfo represents the parameters for an application package resource'
type AppPkgInfo struct {
	Links               AppPkgInfoLinks            `json:"_links"`
	AdditionalArtifacts *interface{}               `json:"additionalArtifacts,omitempty"`
	AppDID              string                     `json:"appDId"`
	AppDVersion         string                     `json:"appDVersion"`
	AppName             string                     `json:"appName"`
	AppProvider         *string                    `json:"appProvider,omitempty"`
	AppSoftwareVersion  string                     `json:"appSoftwareVersion"`
	Checksum            Checksum                   `json:"checksum"`
	ID                  string                     `json:"id"`
	OnboardingState     OnboardingStateEnum        `json:"onboardingState"`
	OperationalState    AppPkgOperationalStateEnum `json:"operationalState"`
	SoftwareImages      interface{}                `json:"softwareImages"`
	UsageState          UsageStateEnum             `json:"usageState"`
	UserDefinedData     map[string]interface{}     `json:"userDefinedData,omitempty"`
}
