package shared

type V2APITarget struct {
	Methods []string `json:"methods"`
	Service *string  `json:"service"`
}
