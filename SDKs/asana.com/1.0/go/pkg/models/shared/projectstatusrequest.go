package shared




type ProjectStatusRequestColorEnum string

const (
    ProjectStatusRequestColorEnumGreen ProjectStatusRequestColorEnum = "green"
ProjectStatusRequestColorEnumYellow ProjectStatusRequestColorEnum = "yellow"
ProjectStatusRequestColorEnumRed ProjectStatusRequestColorEnum = "red"
ProjectStatusRequestColorEnumBlue ProjectStatusRequestColorEnum = "blue"
)


type ProjectStatusRequest struct {
    Color ProjectStatusRequestColorEnum `json:"color"`
    Gid *string `json:"gid,omitempty"`
    HTMLText *string `json:"html_text,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    Text string `json:"text"`
    Title *string `json:"title,omitempty"`
    
}

