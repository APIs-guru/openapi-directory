package shared

type PlayMediaControl struct {
	Activity *PlayMediaControlActivity   `json:"activity"`
	Commands *PlayMediaControlCommandSet `json:"commands"`
	Scheme   PlayMediaControlSchemeEnum  `json:"scheme"`
}
