package shared

type DeleteInventoryRequest struct {
	ClientToken        *string                          `json:"ClientToken"`
	DryRun             *bool                            `json:"DryRun"`
	SchemaDeleteOption *InventorySchemaDeleteOptionEnum `json:"SchemaDeleteOption"`
	TypeName           string                           `json:"TypeName"`
}
