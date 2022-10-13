package shared

type OperatingSystem struct {
	ConfigurationManagers []OperatingSystemConfigurationManager `json:"ConfigurationManagers"`
	ID                    *string                               `json:"Id"`
	Name                  *string                               `json:"Name"`
	ReportedName          *string                               `json:"ReportedName"`
	ReportedVersion       *string                               `json:"ReportedVersion"`
	Supported             *bool                                 `json:"Supported"`
	Type                  *string                               `json:"Type"`
}
