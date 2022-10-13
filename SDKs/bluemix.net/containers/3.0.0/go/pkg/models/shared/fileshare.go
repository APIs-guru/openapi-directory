package shared

type Fileshare struct {
	Capacity    *int64   `json:"capacity"`
	CreatedDate *string  `json:"created_date"`
	FsName      *string  `json:"fsName"`
	HostPath    *string  `json:"hostPath"`
	Iops        *float64 `json:"iops"`
	IopsTotal   *int64   `json:"iopsTotal"`
	OrderID     *string  `json:"orderId"`
	Provider    *string  `json:"provider"`
	SpaceGUID   *string  `json:"spaceGuid"`
	State       *string  `json:"state"`
	UpdatedDate *string  `json:"updated_date"`
}
