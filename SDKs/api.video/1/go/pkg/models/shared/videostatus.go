package shared



type Videostatus struct {
    Encoding *VideostatusEncoding `json:"encoding,omitempty"`
    Ingest *VideostatusIngest `json:"ingest,omitempty"`
    
}

