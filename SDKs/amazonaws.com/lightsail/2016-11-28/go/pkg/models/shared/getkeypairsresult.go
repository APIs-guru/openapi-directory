package shared



type GetKeyPairsResult struct {
    KeyPairs []KeyPair `json:"keyPairs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

