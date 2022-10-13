package shared

type Outpost struct {
	AvailabilityZone   *string           `json:"AvailabilityZone"`
	AvailabilityZoneID *string           `json:"AvailabilityZoneId"`
	Description        *string           `json:"Description"`
	LifeCycleStatus    *string           `json:"LifeCycleStatus"`
	Name               *string           `json:"Name"`
	OutpostArn         *string           `json:"OutpostArn"`
	OutpostID          *string           `json:"OutpostId"`
	OwnerID            *string           `json:"OwnerId"`
	SiteArn            *string           `json:"SiteArn"`
	SiteID             *string           `json:"SiteId"`
	Tags               map[string]string `json:"Tags"`
}
