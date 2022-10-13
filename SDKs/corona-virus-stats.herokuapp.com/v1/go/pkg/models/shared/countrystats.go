package shared

import (
	"time"
)

type CountryStats struct {
	ActiveCases     *int64     `json:"active_cases"`
	CasesPerMillPop *float64   `json:"cases_per_mill_pop"`
	Country         string     `json:"country"`
	Flag            *string    `json:"flag"`
	LastUpdate      *time.Time `json:"last_update"`
	NewCases        *int64     `json:"new_cases"`
	NewDeaths       *int64     `json:"new_deaths"`
	SeriousCritical *int64     `json:"serious_critical"`
	TotalCases      *int64     `json:"total_cases"`
	TotalDeaths     *int64     `json:"total_deaths"`
	TotalRecovered  *string    `json:"total_recovered"`
}
