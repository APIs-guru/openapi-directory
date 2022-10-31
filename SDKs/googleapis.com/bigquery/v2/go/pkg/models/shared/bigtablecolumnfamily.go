package shared



type BigtableColumnFamily struct {
    Columns []BigtableColumn `json:"columns,omitempty"`
    Encoding *string `json:"encoding,omitempty"`
    FamilyID *string `json:"familyId,omitempty"`
    OnlyReadLatest *bool `json:"onlyReadLatest,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

