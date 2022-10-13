package shared

type PlayerSeasonPpaAveragePpa struct {
	All           *float64 `json:"all"`
	FirstDown     *float64 `json:"firstDown"`
	Pass          *float64 `json:"pass"`
	PassingDowns  *float64 `json:"passingDowns"`
	Rush          *float64 `json:"rush"`
	SecondDown    *float64 `json:"secondDown"`
	StandardDowns *float64 `json:"standardDowns"`
	ThirdDown     *float64 `json:"thirdDown"`
}

type PlayerSeasonPpaTotalPpa struct {
	All           *float64 `json:"all"`
	FirstDown     *float64 `json:"firstDown"`
	Pass          *float64 `json:"pass"`
	PassingDowns  *float64 `json:"passingDowns"`
	Rush          *float64 `json:"rush"`
	SecondDown    *float64 `json:"secondDown"`
	StandardDowns *float64 `json:"standardDowns"`
	ThirdDown     *float64 `json:"thirdDown"`
}

type PlayerSeasonPpa struct {
	AveragePpa *PlayerSeasonPpaAveragePpa `json:"averagePPA"`
	Conference *string                    `json:"conference"`
	ID         *int64                     `json:"id"`
	Name       *string                    `json:"name"`
	Position   *string                    `json:"position"`
	Season     *int64                     `json:"season"`
	Team       *string                    `json:"team"`
	TotalPpa   *PlayerSeasonPpaTotalPpa   `json:"totalPPA"`
}
