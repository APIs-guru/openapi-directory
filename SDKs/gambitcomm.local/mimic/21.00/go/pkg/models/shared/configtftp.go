package shared

type ConfigTftp struct {
	Cache   *int32  `json:"cache"`
	Client  *string `json:"client"`
	Dstfile *string `json:"dstfile"`
	Mode    *string `json:"mode"`
	Port    *int32  `json:"port"`
	Retries *int32  `json:"retries"`
	Script  *string `json:"script"`
	Server  *string `json:"server"`
	Srcfile *string `json:"srcfile"`
	Timeout *int32  `json:"timeout"`
	Trace   *string `json:"trace"`
}
