package shared



type Change struct {
    ChangeName *string `json:"ChangeName,omitempty"`
    ChangeType string `json:"ChangeType"`
    Details string `json:"Details"`
    Entity Entity `json:"Entity"`
    
}

