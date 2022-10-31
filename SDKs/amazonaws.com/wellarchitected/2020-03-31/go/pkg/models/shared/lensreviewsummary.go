package shared

import (
	"time"
)

type LensReviewSummary struct {
	LensAlias   *string          `json:"LensAlias,omitempty"`
	LensName    *string          `json:"LensName,omitempty"`
	LensStatus  *LensStatusEnum  `json:"LensStatus,omitempty"`
	LensVersion *string          `json:"LensVersion,omitempty"`
	RiskCounts  map[string]int64 `json:"RiskCounts,omitempty"`
	UpdatedAt   *time.Time       `json:"UpdatedAt,omitempty"`
}
