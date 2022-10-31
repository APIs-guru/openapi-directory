package shared

type BigOvenModelAPIImage struct {
	Caption        *string                  `json:"Caption,omitempty"`
	CreationDate   *string                  `json:"CreationDate,omitempty"`
	ImageID        *int64                   `json:"ImageID,omitempty"`
	ImageSquares   []int32                  `json:"ImageSquares,omitempty"`
	ImageURL       *string                  `json:"ImageURL,omitempty"`
	ImageUrl120    *string                  `json:"ImageURL120,omitempty"`
	ImageUrl128    *string                  `json:"ImageURL128,omitempty"`
	ImageUrl200    *string                  `json:"ImageURL200,omitempty"`
	ImageUrl256    *string                  `json:"ImageURL256,omitempty"`
	ImageUrl48     *string                  `json:"ImageURL48,omitempty"`
	ImageUrl64     *string                  `json:"ImageURL64,omitempty"`
	IsPrimary      *bool                    `json:"IsPrimary,omitempty"`
	MaxImageSquare *int32                   `json:"MaxImageSquare,omitempty"`
	Poster         *BigOvenModelAPIUserInfo `json:"Poster,omitempty"`
}
