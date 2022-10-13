package shared

type Resource struct {
	Catalog          map[string]interface{}    `json:"Catalog"`
	DataLocation     *DataLocationResource     `json:"DataLocation"`
	Database         *DatabaseResource         `json:"Database"`
	LfTag            *LfTagKeyResource         `json:"LFTag"`
	LfTagPolicy      *LfTagPolicyResource      `json:"LFTagPolicy"`
	Table            *TableResource            `json:"Table"`
	TableWithColumns *TableWithColumnsResource `json:"TableWithColumns"`
}
