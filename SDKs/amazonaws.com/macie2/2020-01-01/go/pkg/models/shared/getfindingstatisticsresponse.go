package shared

type GetFindingStatisticsResponse struct {
	CountsByGroup []GroupCount `json:"countsByGroup"`
}
