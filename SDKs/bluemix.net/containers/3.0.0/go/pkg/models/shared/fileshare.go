package shared



type Fileshare struct {
    Capacity *int64 `json:"capacity,omitempty"`
    CreatedDate *string `json:"created_date,omitempty"`
    FsName *string `json:"fsName,omitempty"`
    HostPath *string `json:"hostPath,omitempty"`
    Iops *float64 `json:"iops,omitempty"`
    IopsTotal *int64 `json:"iopsTotal,omitempty"`
    OrderID *string `json:"orderId,omitempty"`
    Provider *string `json:"provider,omitempty"`
    SpaceGUID *string `json:"spaceGuid,omitempty"`
    State *string `json:"state,omitempty"`
    UpdatedDate *string `json:"updated_date,omitempty"`
    
}

