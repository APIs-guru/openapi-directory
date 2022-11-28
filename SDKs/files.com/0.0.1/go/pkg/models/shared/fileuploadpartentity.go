package shared

// FileUploadPartEntity
// Begin file upload
type FileUploadPartEntity struct {
	Action             *string                `json:"action,omitempty"`
	AskAboutOverwrites *bool                  `json:"ask_about_overwrites,omitempty"`
	AvailableParts     *int32                 `json:"available_parts,omitempty"`
	Expires            *string                `json:"expires,omitempty"`
	Headers            map[string]interface{} `json:"headers,omitempty"`
	HTTPMethod         *string                `json:"http_method,omitempty"`
	NextPartsize       *int32                 `json:"next_partsize,omitempty"`
	ParallelParts      *bool                  `json:"parallel_parts,omitempty"`
	Parameters         map[string]interface{} `json:"parameters,omitempty"`
	PartNumber         *int32                 `json:"part_number,omitempty"`
	Partsize           *int32                 `json:"partsize,omitempty"`
	Path               *string                `json:"path,omitempty"`
	Ref                *string                `json:"ref,omitempty"`
	Send               map[string]interface{} `json:"send,omitempty"`
	UploadURI          *string                `json:"upload_uri,omitempty"`
}
