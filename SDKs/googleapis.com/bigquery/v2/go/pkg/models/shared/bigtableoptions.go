package shared



type BigtableOptions struct {
    ColumnFamilies []BigtableColumnFamily `json:"columnFamilies,omitempty"`
    IgnoreUnspecifiedColumnFamilies *bool `json:"ignoreUnspecifiedColumnFamilies,omitempty"`
    ReadRowkeyAsString *bool `json:"readRowkeyAsString,omitempty"`
    
}

