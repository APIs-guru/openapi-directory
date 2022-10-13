package shared

type DkimAttributes struct {
	SigningAttributesOrigin *DkimSigningAttributesOriginEnum `json:"SigningAttributesOrigin"`
	SigningEnabled          *bool                            `json:"SigningEnabled"`
	Status                  *DkimStatusEnum                  `json:"Status"`
	Tokens                  []string                         `json:"Tokens"`
}
