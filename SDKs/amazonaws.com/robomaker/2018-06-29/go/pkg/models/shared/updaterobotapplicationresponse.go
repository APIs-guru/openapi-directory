package shared

import (
	"time"
)

type UpdateRobotApplicationResponse struct {
	Arn                *string             `json:"arn"`
	Environment        *Environment        `json:"environment"`
	LastUpdatedAt      *time.Time          `json:"lastUpdatedAt"`
	Name               *string             `json:"name"`
	RevisionID         *string             `json:"revisionId"`
	RobotSoftwareSuite *RobotSoftwareSuite `json:"robotSoftwareSuite"`
	Sources            []Source            `json:"sources"`
	Version            *string             `json:"version"`
}
