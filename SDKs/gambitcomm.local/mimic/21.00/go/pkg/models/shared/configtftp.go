package shared

type ConfigTftp struct {
	Cache   *int32  `json:"cache,omitempty"`
	Client  *string `json:"client,omitempty"`
	Dstfile *string `json:"dstfile,omitempty"`
	Mode    *string `json:"mode,omitempty"`
	Port    *int32  `json:"port,omitempty"`
	Retries *int32  `json:"retries,omitempty"`
	Script  *string `json:"script,omitempty"`
	Server  *string `json:"server,omitempty"`
	Srcfile *string `json:"srcfile,omitempty"`
	Timeout *int32  `json:"timeout,omitempty"`
	Trace   *string `json:"trace,omitempty"`
}
