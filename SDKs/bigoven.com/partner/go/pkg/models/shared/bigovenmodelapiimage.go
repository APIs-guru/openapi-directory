package shared

type BigOvenModelAPIImage struct {
	Caption        *string                  `json:"Caption"`
	CreationDate   *string                  `json:"CreationDate"`
	ImageID        *int64                   `json:"ImageID"`
	ImageSquares   []int32                  `json:"ImageSquares"`
	ImageURL       *string                  `json:"ImageURL"`
	ImageUrl120    *string                  `json:"ImageURL120"`
	ImageUrl128    *string                  `json:"ImageURL128"`
	ImageUrl200    *string                  `json:"ImageURL200"`
	ImageUrl256    *string                  `json:"ImageURL256"`
	ImageUrl48     *string                  `json:"ImageURL48"`
	ImageUrl64     *string                  `json:"ImageURL64"`
	IsPrimary      *bool                    `json:"IsPrimary"`
	MaxImageSquare *int32                   `json:"MaxImageSquare"`
	Poster         *BigOvenModelAPIUserInfo `json:"Poster"`
}
