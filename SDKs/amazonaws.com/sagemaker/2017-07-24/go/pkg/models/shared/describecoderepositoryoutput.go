package shared

import (
	"time"
)

type DescribeCodeRepositoryOutput struct {
	CodeRepositoryArn  string     `json:"CodeRepositoryArn"`
	CodeRepositoryName string     `json:"CodeRepositoryName"`
	CreationTime       time.Time  `json:"CreationTime"`
	GitConfig          *GitConfig `json:"GitConfig"`
	LastModifiedTime   time.Time  `json:"LastModifiedTime"`
}
