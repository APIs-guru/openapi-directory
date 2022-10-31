package shared



type PersistentPreferredActivity struct {
    Actions []string `json:"actions,omitempty"`
    Categories []string `json:"categories,omitempty"`
    ReceiverActivity *string `json:"receiverActivity,omitempty"`
    
}

