package shared



type Outpost struct {
    AvailabilityZone *string `json:"AvailabilityZone,omitempty"`
    AvailabilityZoneID *string `json:"AvailabilityZoneId,omitempty"`
    Description *string `json:"Description,omitempty"`
    LifeCycleStatus *string `json:"LifeCycleStatus,omitempty"`
    Name *string `json:"Name,omitempty"`
    OutpostArn *string `json:"OutpostArn,omitempty"`
    OutpostID *string `json:"OutpostId,omitempty"`
    OwnerID *string `json:"OwnerId,omitempty"`
    SiteArn *string `json:"SiteArn,omitempty"`
    SiteID *string `json:"SiteId,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

