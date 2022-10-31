package shared



type DeleteInventoryRequest struct {
    ClientToken *string `json:"ClientToken,omitempty"`
    DryRun *bool `json:"DryRun,omitempty"`
    SchemaDeleteOption *InventorySchemaDeleteOptionEnum `json:"SchemaDeleteOption,omitempty"`
    TypeName string `json:"TypeName"`
    
}

