package shared

// Package
// Packages are named collections of versions.
type Package struct {
	CreateTime  *string `json:"createTime,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
}
