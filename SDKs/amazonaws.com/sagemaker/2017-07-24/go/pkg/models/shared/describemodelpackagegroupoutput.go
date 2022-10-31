package shared

import (
	"time"
)

type DescribeModelPackageGroupOutput struct {
	CreatedBy                    UserContext                 `json:"CreatedBy"`
	CreationTime                 time.Time                   `json:"CreationTime"`
	ModelPackageGroupArn         string                      `json:"ModelPackageGroupArn"`
	ModelPackageGroupDescription *string                     `json:"ModelPackageGroupDescription,omitempty"`
	ModelPackageGroupName        string                      `json:"ModelPackageGroupName"`
	ModelPackageGroupStatus      ModelPackageGroupStatusEnum `json:"ModelPackageGroupStatus"`
}
