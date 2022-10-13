package shared

type InstanceStateEnum string

const (
	InstanceStateEnumStateUnspecified InstanceStateEnum = "STATE_UNSPECIFIED"
	InstanceStateEnumInactive         InstanceStateEnum = "INACTIVE"
	InstanceStateEnumCreating         InstanceStateEnum = "CREATING"
	InstanceStateEnumActive           InstanceStateEnum = "ACTIVE"
	InstanceStateEnumUpdating         InstanceStateEnum = "UPDATING"
	InstanceStateEnumDeleting         InstanceStateEnum = "DELETING"
	InstanceStateEnumFailed           InstanceStateEnum = "FAILED"
)

type Instance struct {
	Config       *Config            `json:"config"`
	CreateTime   *string            `json:"createTime"`
	Name         *string            `json:"name"`
	State        *InstanceStateEnum `json:"state"`
	StateMessage *string            `json:"stateMessage"`
	UpdateTime   *string            `json:"updateTime"`
}
