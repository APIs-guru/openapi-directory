package shared



type PlayerSeasonPpaAveragePpa struct {
    All *float64 `json:"all,omitempty"`
    FirstDown *float64 `json:"firstDown,omitempty"`
    Pass *float64 `json:"pass,omitempty"`
    PassingDowns *float64 `json:"passingDowns,omitempty"`
    Rush *float64 `json:"rush,omitempty"`
    SecondDown *float64 `json:"secondDown,omitempty"`
    StandardDowns *float64 `json:"standardDowns,omitempty"`
    ThirdDown *float64 `json:"thirdDown,omitempty"`
    
}

type PlayerSeasonPpaTotalPpa struct {
    All *float64 `json:"all,omitempty"`
    FirstDown *float64 `json:"firstDown,omitempty"`
    Pass *float64 `json:"pass,omitempty"`
    PassingDowns *float64 `json:"passingDowns,omitempty"`
    Rush *float64 `json:"rush,omitempty"`
    SecondDown *float64 `json:"secondDown,omitempty"`
    StandardDowns *float64 `json:"standardDowns,omitempty"`
    ThirdDown *float64 `json:"thirdDown,omitempty"`
    
}

type PlayerSeasonPpa struct {
    AveragePpa *PlayerSeasonPpaAveragePpa `json:"averagePPA,omitempty"`
    Conference *string `json:"conference,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Position *string `json:"position,omitempty"`
    Season *int64 `json:"season,omitempty"`
    Team *string `json:"team,omitempty"`
    TotalPpa *PlayerSeasonPpaTotalPpa `json:"totalPPA,omitempty"`
    
}

