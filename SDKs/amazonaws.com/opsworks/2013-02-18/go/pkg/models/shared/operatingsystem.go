package shared

type OperatingSystem struct {
	ConfigurationManagers []OperatingSystemConfigurationManager `json:"ConfigurationManagers,omitempty"`
	ID                    *string                               `json:"Id,omitempty"`
	Name                  *string                               `json:"Name,omitempty"`
	ReportedName          *string                               `json:"ReportedName,omitempty"`
	ReportedVersion       *string                               `json:"ReportedVersion,omitempty"`
	Supported             *bool                                 `json:"Supported,omitempty"`
	Type                  *string                               `json:"Type,omitempty"`
}
