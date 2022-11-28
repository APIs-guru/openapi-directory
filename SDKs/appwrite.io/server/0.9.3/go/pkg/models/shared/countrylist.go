package shared

// CountryList
// Countries List
type CountryList struct {
	Countries []Country `json:"countries"`
	Sum       int32     `json:"sum"`
}
