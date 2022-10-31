package shared

import (
"time")


type ProjectStatusResponseColorEnum string

const (
    ProjectStatusResponseColorEnumGreen ProjectStatusResponseColorEnum = "green"
ProjectStatusResponseColorEnumYellow ProjectStatusResponseColorEnum = "yellow"
ProjectStatusResponseColorEnumRed ProjectStatusResponseColorEnum = "red"
ProjectStatusResponseColorEnumBlue ProjectStatusResponseColorEnum = "blue"
)


type ProjectStatusResponse struct {
    Author *UserCompact `json:"author,omitempty"`
    Color ProjectStatusResponseColorEnum `json:"color"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CreatedBy *UserCompact `json:"created_by,omitempty"`
    Gid *string `json:"gid,omitempty"`
    HTMLText *string `json:"html_text,omitempty"`
    ModifiedAt *time.Time `json:"modified_at,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    Text string `json:"text"`
    Title *string `json:"title,omitempty"`
    
}

