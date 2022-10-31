package shared



type AccountTreeResponse struct {
    Account *Account `json:"account,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Profile *Profile `json:"profile,omitempty"`
    Webproperty *Webproperty `json:"webproperty,omitempty"`
    
}

