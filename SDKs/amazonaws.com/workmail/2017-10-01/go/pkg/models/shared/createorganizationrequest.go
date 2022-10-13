package shared

type CreateOrganizationRequest struct {
	Alias                  string   `json:"Alias"`
	ClientToken            *string  `json:"ClientToken"`
	DirectoryID            *string  `json:"DirectoryId"`
	Domains                []Domain `json:"Domains"`
	EnableInteroperability *bool    `json:"EnableInteroperability"`
	KmsKeyArn              *string  `json:"KmsKeyArn"`
}
