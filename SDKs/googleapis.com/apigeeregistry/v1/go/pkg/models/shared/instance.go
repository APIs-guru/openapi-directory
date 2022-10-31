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
	Config       *Config            `json:"config,omitempty"`
	CreateTime   *string            `json:"createTime,omitempty"`
	Name         *string            `json:"name,omitempty"`
	State        *InstanceStateEnum `json:"state,omitempty"`
	StateMessage *string            `json:"stateMessage,omitempty"`
	UpdateTime   *string            `json:"updateTime,omitempty"`
}
