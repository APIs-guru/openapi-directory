package shared

import (
	"time"
)

type ResourceInfo struct {
	LastModified *time.Time `json:"LastModified"`
	ResourceArn  *string    `json:"ResourceArn"`
	RoleArn      *string    `json:"RoleArn"`
}
