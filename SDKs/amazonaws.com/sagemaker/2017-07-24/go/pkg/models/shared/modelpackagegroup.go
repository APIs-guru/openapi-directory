package shared

import (
	"time"
)

type ModelPackageGroup struct {
	CreatedBy                    *UserContext                 `json:"CreatedBy"`
	CreationTime                 *time.Time                   `json:"CreationTime"`
	ModelPackageGroupArn         *string                      `json:"ModelPackageGroupArn"`
	ModelPackageGroupDescription *string                      `json:"ModelPackageGroupDescription"`
	ModelPackageGroupName        *string                      `json:"ModelPackageGroupName"`
	ModelPackageGroupStatus      *ModelPackageGroupStatusEnum `json:"ModelPackageGroupStatus"`
	Tags                         []Tag                        `json:"Tags"`
}
