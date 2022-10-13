package shared

type DkimAttributes struct {
	SigningEnabled *bool           `json:"SigningEnabled"`
	Status         *DkimStatusEnum `json:"Status"`
	Tokens         []string        `json:"Tokens"`
}
