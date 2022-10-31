package shared



type PlayMediaControl struct {
    Activity *PlayMediaControlActivity `json:"activity,omitempty"`
    Commands *PlayMediaControlCommandSet `json:"commands,omitempty"`
    Scheme PlayMediaControlSchemeEnum `json:"scheme"`
    
}

