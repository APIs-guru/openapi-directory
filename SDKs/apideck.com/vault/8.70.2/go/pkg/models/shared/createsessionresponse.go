package shared



type CreateSessionResponseData struct {
    SessionToken string `json:"session_token"`
    SessionURI string `json:"session_uri"`
    
}

type CreateSessionResponse struct {
    Data CreateSessionResponseData `json:"data"`
    Status string `json:"status"`
    StatusCode int64 `json:"status_code"`
    
}

