package shared

type PlayerUsageUsage struct {
	FirstDown     *float64 `json:"firstDown"`
	Overall       *float64 `json:"overall"`
	Pass          *float64 `json:"pass"`
	PassingDowns  *float64 `json:"passingDowns"`
	Rush          *float64 `json:"rush"`
	SecondDown    *float64 `json:"secondDown"`
	StandardDowns *float64 `json:"standardDowns"`
	ThirdDown     *float64 `json:"thirdDown"`
}

type PlayerUsage struct {
	Conference *string           `json:"conference"`
	ID         *int64            `json:"id"`
	Name       *string           `json:"name"`
	Position   *string           `json:"position"`
	Season     *int64            `json:"season"`
	Team       *string           `json:"team"`
	Usage      *PlayerUsageUsage `json:"usage"`
}
