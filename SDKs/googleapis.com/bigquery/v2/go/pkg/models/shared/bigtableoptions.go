package shared

type BigtableOptions struct {
	ColumnFamilies                  []BigtableColumnFamily `json:"columnFamilies"`
	IgnoreUnspecifiedColumnFamilies *bool                  `json:"ignoreUnspecifiedColumnFamilies"`
	ReadRowkeyAsString              *bool                  `json:"readRowkeyAsString"`
}
