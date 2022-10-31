package shared



type LiveStreamSession struct {
    Client *LiveStreamSessionClient `json:"client,omitempty"`
    Device *LiveStreamSessionDevice `json:"device,omitempty"`
    Location *LiveStreamSessionLocation `json:"location,omitempty"`
    Os *VideoSessionOs `json:"os,omitempty"`
    Referrer *LiveStreamSessionReferrer `json:"referrer,omitempty"`
    Session *LiveStreamSessionSession `json:"session,omitempty"`
    
}

