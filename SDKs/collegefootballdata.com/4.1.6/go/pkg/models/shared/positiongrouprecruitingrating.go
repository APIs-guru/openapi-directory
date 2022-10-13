package shared

type PositionGroupRecruitingRating struct {
	AverageRating *float64 `json:"averageRating"`
	AverageStars  *float64 `json:"averageStars"`
	Commits       *float64 `json:"commits"`
	Conference    *string  `json:"conference"`
	PositionGroup *string  `json:"positionGroup"`
	Team          *string  `json:"team"`
	TotalRating   *float64 `json:"totalRating"`
}
