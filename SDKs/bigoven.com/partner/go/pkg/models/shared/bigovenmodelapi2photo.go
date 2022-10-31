package shared

type BigOvenModelApi2Photo struct {
	Caption        *string                        `json:"Caption,omitempty"`
	CreationDate   *string                        `json:"CreationDate,omitempty"`
	ImageID        *int64                         `json:"ImageID,omitempty"`
	IsPrimary      *bool                          `json:"IsPrimary,omitempty"`
	MaxImageSquare *int32                         `json:"MaxImageSquare,omitempty"`
	PhotoURL       *string                        `json:"PhotoUrl,omitempty"`
	Poster         *BigOvenModelApi2UserInfoTinyx `json:"Poster,omitempty"`
}
