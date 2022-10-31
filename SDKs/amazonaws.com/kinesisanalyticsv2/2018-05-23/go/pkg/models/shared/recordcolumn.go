package shared



type RecordColumn struct {
    Mapping *string `json:"Mapping,omitempty"`
    Name string `json:"Name"`
    SQLType string `json:"SqlType"`
    
}

