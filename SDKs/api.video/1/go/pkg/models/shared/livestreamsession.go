package shared

type LiveStreamSession struct {
	Client   *LiveStreamSessionClient   `json:"client"`
	Device   *LiveStreamSessionDevice   `json:"device"`
	Location *LiveStreamSessionLocation `json:"location"`
	Os       *VideoSessionOs            `json:"os"`
	Referrer *LiveStreamSessionReferrer `json:"referrer"`
	Session  *LiveStreamSessionSession  `json:"session"`
}
