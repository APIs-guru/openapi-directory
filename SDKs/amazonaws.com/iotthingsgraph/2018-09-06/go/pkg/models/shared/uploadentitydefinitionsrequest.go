package shared

type UploadEntityDefinitionsRequest struct {
	DeprecateExistingEntities *bool               `json:"deprecateExistingEntities"`
	Document                  *DefinitionDocument `json:"document"`
	SyncWithPublicNamespace   *bool               `json:"syncWithPublicNamespace"`
}
