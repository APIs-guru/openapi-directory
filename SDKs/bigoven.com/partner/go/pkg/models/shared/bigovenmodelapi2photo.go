package shared

type BigOvenModelApi2Photo struct {
	Caption        *string                        `json:"Caption"`
	CreationDate   *string                        `json:"CreationDate"`
	ImageID        *int64                         `json:"ImageID"`
	IsPrimary      *bool                          `json:"IsPrimary"`
	MaxImageSquare *int32                         `json:"MaxImageSquare"`
	PhotoURL       *string                        `json:"PhotoUrl"`
	Poster         *BigOvenModelApi2UserInfoTinyx `json:"Poster"`
}
