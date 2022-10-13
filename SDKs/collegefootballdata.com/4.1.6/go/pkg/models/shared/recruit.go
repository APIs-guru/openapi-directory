package shared

type RecruitHometownInfo struct {
	CountyFips *string  `json:"countyFips"`
	Latitude   *float64 `json:"latitude"`
	Longitude  *float64 `json:"longitude"`
}

type Recruit struct {
	AthleteID     *int64               `json:"athleteId"`
	City          *string              `json:"city"`
	CommittedTo   *string              `json:"committedTo"`
	Country       *string              `json:"country"`
	Height        *float64             `json:"height"`
	HometownInfo  *RecruitHometownInfo `json:"hometownInfo"`
	ID            *int64               `json:"id"`
	Name          *string              `json:"name"`
	Position      *string              `json:"position"`
	Ranking       *int64               `json:"ranking"`
	Rating        *float64             `json:"rating"`
	RecruitType   *string              `json:"recruitType"`
	School        *string              `json:"school"`
	Stars         *int64               `json:"stars"`
	StateProvince *string              `json:"stateProvince"`
	Weight        *int64               `json:"weight"`
	Year          *int64               `json:"year"`
}
