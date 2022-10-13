package shared

type Config struct {
	CmekKeyName *string `json:"cmekKeyName"`
	Location    *string `json:"location"`
}
