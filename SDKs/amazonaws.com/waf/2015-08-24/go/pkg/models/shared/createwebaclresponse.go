package shared



type CreateWebACLResponse struct {
    ChangeToken *string `json:"ChangeToken,omitempty"`
    WebACL *WebACL `json:"WebACL,omitempty"`
    
}

