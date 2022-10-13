package shared

import (
	"time"
)

type PipelineStages struct {
	DisplayOrder   *int64  `json:"display_order"`
	ID             *string `json:"id"`
	Name           *string `json:"name"`
	Value          *string `json:"value"`
	WinProbability *int64  `json:"win_probability"`
}

type Pipeline struct {
	Archived     *bool            `json:"archived"`
	CreatedAt    *time.Time       `json:"created_at"`
	Currency     *CurrencyEnum    `json:"currency"`
	DisplayOrder *int64           `json:"display_order"`
	ID           *string          `json:"id"`
	Name         string           `json:"name"`
	Stages       []PipelineStages `json:"stages"`
	UpdatedAt    *time.Time       `json:"updated_at"`
}
