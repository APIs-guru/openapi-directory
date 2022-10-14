package shared

import (
	"time"
)

type CountryStats struct {
	ActiveCases     *int64     `json:"active_cases,omitempty"`
	CasesPerMillPop *float64   `json:"cases_per_mill_pop,omitempty"`
	Country         string     `json:"country"`
	Flag            *string    `json:"flag,omitempty"`
	LastUpdate      *time.Time `json:"last_update,omitempty"`
	NewCases        *int64     `json:"new_cases,omitempty"`
	NewDeaths       *int64     `json:"new_deaths,omitempty"`
	SeriousCritical *int64     `json:"serious_critical,omitempty"`
	TotalCases      *int64     `json:"total_cases,omitempty"`
	TotalDeaths     *int64     `json:"total_deaths,omitempty"`
	TotalRecovered  *string    `json:"total_recovered,omitempty"`
}
