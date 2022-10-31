package shared



type VideoSession struct {
    Client *VideoSessionClient `json:"client,omitempty"`
    Device *VideoSessionDevice `json:"device,omitempty"`
    Location *VideoSessionLocation `json:"location,omitempty"`
    Os *VideoSessionOs `json:"os,omitempty"`
    Referrer *VideoSessionReferrer `json:"referrer,omitempty"`
    Session *VideoSessionSession `json:"session,omitempty"`
    
}

