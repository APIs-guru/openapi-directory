package shared

// RecordColumn
// <p>Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>
type RecordColumn struct {
	Mapping *string `json:"Mapping,omitempty"`
	Name    string  `json:"Name"`
	SQLType string  `json:"SqlType"`
}
