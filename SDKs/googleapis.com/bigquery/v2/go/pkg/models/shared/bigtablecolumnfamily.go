package shared

type BigtableColumnFamily struct {
	Columns        []BigtableColumn `json:"columns"`
	Encoding       *string          `json:"encoding"`
	FamilyID       *string          `json:"familyId"`
	OnlyReadLatest *bool            `json:"onlyReadLatest"`
	Type           *string          `json:"type"`
}
