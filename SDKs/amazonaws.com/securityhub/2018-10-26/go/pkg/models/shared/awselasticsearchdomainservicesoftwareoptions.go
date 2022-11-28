package shared

// AwsElasticsearchDomainServiceSoftwareOptions
// Information about the state of the domain relative to the latest service software.
type AwsElasticsearchDomainServiceSoftwareOptions struct {
	AutomatedUpdateDate *string `json:"AutomatedUpdateDate,omitempty"`
	Cancellable         *bool   `json:"Cancellable,omitempty"`
	CurrentVersion      *string `json:"CurrentVersion,omitempty"`
	Description         *string `json:"Description,omitempty"`
	NewVersion          *string `json:"NewVersion,omitempty"`
	UpdateAvailable     *bool   `json:"UpdateAvailable,omitempty"`
	UpdateStatus        *string `json:"UpdateStatus,omitempty"`
}
