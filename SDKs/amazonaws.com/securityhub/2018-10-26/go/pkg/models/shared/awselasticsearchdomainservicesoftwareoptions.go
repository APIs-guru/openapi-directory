package shared

type AwsElasticsearchDomainServiceSoftwareOptions struct {
	AutomatedUpdateDate *string `json:"AutomatedUpdateDate"`
	Cancellable         *bool   `json:"Cancellable"`
	CurrentVersion      *string `json:"CurrentVersion"`
	Description         *string `json:"Description"`
	NewVersion          *string `json:"NewVersion"`
	UpdateAvailable     *bool   `json:"UpdateAvailable"`
	UpdateStatus        *string `json:"UpdateStatus"`
}
