package shared

type RecordColumn struct {
	Mapping *string `json:"Mapping"`
	Name    string  `json:"Name"`
	SQLType string  `json:"SqlType"`
}
