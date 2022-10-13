package shared

type GetCelebrityInfoResponse struct {
	KnownGender *KnownGender `json:"KnownGender"`
	Name        *string      `json:"Name"`
	Urls        []string     `json:"Urls"`
}
