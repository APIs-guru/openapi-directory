package shared

import (
	"time"
)

type ReviewInformation struct {
	ReviewedTime *time.Time        `json:"ReviewedTime"`
	Reviewer     *string           `json:"Reviewer"`
	Status       *ReviewStatusEnum `json:"Status"`
}
