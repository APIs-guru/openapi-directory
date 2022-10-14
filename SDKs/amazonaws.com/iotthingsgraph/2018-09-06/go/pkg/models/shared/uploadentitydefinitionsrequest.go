package shared

type UploadEntityDefinitionsRequest struct {
	DeprecateExistingEntities *bool               `json:"deprecateExistingEntities,omitempty"`
	Document                  *DefinitionDocument `json:"document,omitempty"`
	SyncWithPublicNamespace   *bool               `json:"syncWithPublicNamespace,omitempty"`
}
