package shared

import (
"time")

type PipelineStages struct {
    DisplayOrder *int64 `json:"display_order,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Value *string `json:"value,omitempty"`
    WinProbability *int64 `json:"win_probability,omitempty"`
    
}

type Pipeline struct {
    Archived *bool `json:"archived,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Currency *CurrencyEnum `json:"currency,omitempty"`
    DisplayOrder *int64 `json:"display_order,omitempty"`
    ID *string `json:"id,omitempty"`
    Name string `json:"name"`
    Stages []PipelineStages `json:"stages,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    
}

