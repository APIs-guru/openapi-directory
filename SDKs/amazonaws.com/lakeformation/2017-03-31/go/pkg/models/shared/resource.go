package shared



type Resource struct {
    Catalog map[string]interface{} `json:"Catalog,omitempty"`
    DataLocation *DataLocationResource `json:"DataLocation,omitempty"`
    Database *DatabaseResource `json:"Database,omitempty"`
    LfTag *LfTagKeyResource `json:"LFTag,omitempty"`
    LfTagPolicy *LfTagPolicyResource `json:"LFTagPolicy,omitempty"`
    Table *TableResource `json:"Table,omitempty"`
    TableWithColumns *TableWithColumnsResource `json:"TableWithColumns,omitempty"`
    
}

