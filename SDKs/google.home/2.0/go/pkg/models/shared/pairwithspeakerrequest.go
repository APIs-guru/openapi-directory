package shared



type PairwithSpeakerRequest struct {
    Connect bool `json:"connect"`
    MacAddress string `json:"mac_address"`
    Profile int32 `json:"profile"`
    
}

