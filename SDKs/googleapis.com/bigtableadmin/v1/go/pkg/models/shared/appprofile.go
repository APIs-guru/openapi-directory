package shared



type AppProfile struct {
    Description *string `json:"description,omitempty"`
    Etag *string `json:"etag,omitempty"`
    MultiClusterRoutingUseAny map[string]interface{} `json:"multiClusterRoutingUseAny,omitempty"`
    Name *string `json:"name,omitempty"`
    SingleClusterRouting *SingleClusterRouting `json:"singleClusterRouting,omitempty"`
    
}

