package shared

type RelationalDatabaseEndpoint struct {
	Address *string `json:"address"`
	Port    *int64  `json:"port"`
}
