package shared

type FileUploadPartEntity struct {
	Action             *string                `json:"action"`
	AskAboutOverwrites *bool                  `json:"ask_about_overwrites"`
	AvailableParts     *int32                 `json:"available_parts"`
	Expires            *string                `json:"expires"`
	Headers            map[string]interface{} `json:"headers"`
	HTTPMethod         *string                `json:"http_method"`
	NextPartsize       *int32                 `json:"next_partsize"`
	ParallelParts      *bool                  `json:"parallel_parts"`
	Parameters         map[string]interface{} `json:"parameters"`
	PartNumber         *int32                 `json:"part_number"`
	Partsize           *int32                 `json:"partsize"`
	Path               *string                `json:"path"`
	Ref                *string                `json:"ref"`
	Send               map[string]interface{} `json:"send"`
	UploadURI          *string                `json:"upload_uri"`
}
