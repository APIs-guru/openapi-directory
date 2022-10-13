package shared

type CreateProductInput struct {
	AcceptLanguage                 *string                        `json:"AcceptLanguage"`
	Description                    *string                        `json:"Description"`
	Distributor                    *string                        `json:"Distributor"`
	IdempotencyToken               string                         `json:"IdempotencyToken"`
	Name                           string                         `json:"Name"`
	Owner                          string                         `json:"Owner"`
	ProductType                    ProductTypeEnum                `json:"ProductType"`
	ProvisioningArtifactParameters ProvisioningArtifactProperties `json:"ProvisioningArtifactParameters"`
	SupportDescription             *string                        `json:"SupportDescription"`
	SupportEmail                   *string                        `json:"SupportEmail"`
	SupportURL                     *string                        `json:"SupportUrl"`
	Tags                           []Tag                          `json:"Tags"`
}
