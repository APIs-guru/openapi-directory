package shared

import (
	"time"
)

type UpdateRobotApplicationResponse struct {
	Arn                *string             `json:"arn,omitempty"`
	Environment        *Environment        `json:"environment,omitempty"`
	LastUpdatedAt      *time.Time          `json:"lastUpdatedAt,omitempty"`
	Name               *string             `json:"name,omitempty"`
	RevisionID         *string             `json:"revisionId,omitempty"`
	RobotSoftwareSuite *RobotSoftwareSuite `json:"robotSoftwareSuite,omitempty"`
	Sources            []Source            `json:"sources,omitempty"`
	Version            *string             `json:"version,omitempty"`
}
