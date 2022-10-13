package shared

type StackSummary struct {
	AppsCount      *int64          `json:"AppsCount"`
	Arn            *string         `json:"Arn"`
	InstancesCount *InstancesCount `json:"InstancesCount"`
	LayersCount    *int64          `json:"LayersCount"`
	Name           *string         `json:"Name"`
	StackID        *string         `json:"StackId"`
}
