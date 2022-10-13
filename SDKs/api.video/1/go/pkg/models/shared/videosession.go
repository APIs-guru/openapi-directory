package shared

type VideoSession struct {
	Client   *VideoSessionClient   `json:"client"`
	Device   *VideoSessionDevice   `json:"device"`
	Location *VideoSessionLocation `json:"location"`
	Os       *VideoSessionOs       `json:"os"`
	Referrer *VideoSessionReferrer `json:"referrer"`
	Session  *VideoSessionSession  `json:"session"`
}
