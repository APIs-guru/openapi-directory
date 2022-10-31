package shared




type PageStatusEnum string

const (
    PageStatusEnumBuilt PageStatusEnum = "built"
PageStatusEnumBuilding PageStatusEnum = "building"
PageStatusEnumErrored PageStatusEnum = "errored"
)


type Page struct {
    Cname string `json:"cname"`
    Custom404 bool `json:"custom_404"`
    HTMLURL *string `json:"html_url,omitempty"`
    Public bool `json:"public"`
    Source *PagesSourceHash `json:"source,omitempty"`
    Status PageStatusEnum `json:"status"`
    URL string `json:"url"`
    
}

