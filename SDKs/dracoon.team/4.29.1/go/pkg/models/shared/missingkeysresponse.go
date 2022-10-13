package shared

type MissingKeysResponse struct {
	Files []FileFileKeys      `json:"files"`
	Items []UserIDFileIDItem  `json:"items"`
	Range *Range              `json:"range"`
	Users []UserUserPublicKey `json:"users"`
}
