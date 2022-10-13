package shared

import (
	"time"
)

type TrialComponentSimpleSummary struct {
	CreatedBy            *UserContext          `json:"CreatedBy"`
	CreationTime         *time.Time            `json:"CreationTime"`
	TrialComponentArn    *string               `json:"TrialComponentArn"`
	TrialComponentName   *string               `json:"TrialComponentName"`
	TrialComponentSource *TrialComponentSource `json:"TrialComponentSource"`
}
