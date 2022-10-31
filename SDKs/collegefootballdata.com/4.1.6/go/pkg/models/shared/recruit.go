package shared

type RecruitHometownInfo struct {
	CountyFips *string  `json:"countyFips,omitempty"`
	Latitude   *float64 `json:"latitude,omitempty"`
	Longitude  *float64 `json:"longitude,omitempty"`
}

type Recruit struct {
	AthleteID     *int64               `json:"athleteId,omitempty"`
	City          *string              `json:"city,omitempty"`
	CommittedTo   *string              `json:"committedTo,omitempty"`
	Country       *string              `json:"country,omitempty"`
	Height        *float64             `json:"height,omitempty"`
	HometownInfo  *RecruitHometownInfo `json:"hometownInfo,omitempty"`
	ID            *int64               `json:"id,omitempty"`
	Name          *string              `json:"name,omitempty"`
	Position      *string              `json:"position,omitempty"`
	Ranking       *int64               `json:"ranking,omitempty"`
	Rating        *float64             `json:"rating,omitempty"`
	RecruitType   *string              `json:"recruitType,omitempty"`
	School        *string              `json:"school,omitempty"`
	Stars         *int64               `json:"stars,omitempty"`
	StateProvince *string              `json:"stateProvince,omitempty"`
	Weight        *int64               `json:"weight,omitempty"`
	Year          *int64               `json:"year,omitempty"`
}
