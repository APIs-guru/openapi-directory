package shared

import (
"time")

type ModelPackageGroup struct {
    CreatedBy *UserContext `json:"CreatedBy,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    ModelPackageGroupArn *string `json:"ModelPackageGroupArn,omitempty"`
    ModelPackageGroupDescription *string `json:"ModelPackageGroupDescription,omitempty"`
    ModelPackageGroupName *string `json:"ModelPackageGroupName,omitempty"`
    ModelPackageGroupStatus *ModelPackageGroupStatusEnum `json:"ModelPackageGroupStatus,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

