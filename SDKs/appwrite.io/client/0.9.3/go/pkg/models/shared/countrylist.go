package shared

type CountryList struct {
	Countries []Country `json:"countries"`
	Sum       int32     `json:"sum"`
}
