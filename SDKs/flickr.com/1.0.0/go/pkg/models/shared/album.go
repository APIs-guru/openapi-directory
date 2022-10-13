package shared

type Album struct {
	CanComment    *bool    `json:"can_comment"`
	CountComments *float64 `json:"count_comments"`
	CountViews    *float64 `json:"count_views"`
	DateCreate    *float64 `json:"date_create"`
	DateUpdate    *float64 `json:"date_update"`
	Description   *string  `json:"description"`
	Farm          *string  `json:"farm"`
	ID            *string  `json:"id"`
	Photos        *float64 `json:"photos"`
	Primary       *string  `json:"primary"`
	Secret        *string  `json:"secret"`
	Server        *string  `json:"server"`
	Title         *string  `json:"title"`
	Videos        *float64 `json:"videos"`
}
