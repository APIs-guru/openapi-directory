package shared

type GetProvisionedProductOutputsOutput struct {
	NextPageToken *string        `json:"NextPageToken"`
	Outputs       []RecordOutput `json:"Outputs"`
}
