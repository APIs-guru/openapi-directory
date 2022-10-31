package shared

type GetProvisionedProductOutputsOutput struct {
	NextPageToken *string        `json:"NextPageToken,omitempty"`
	Outputs       []RecordOutput `json:"Outputs,omitempty"`
}
