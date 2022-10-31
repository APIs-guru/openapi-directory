package shared

import (
"time")

type ResourceInfo struct {
    LastModified *time.Time `json:"LastModified,omitempty"`
    ResourceArn *string `json:"ResourceArn,omitempty"`
    RoleArn *string `json:"RoleArn,omitempty"`
    
}

