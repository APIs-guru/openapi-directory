package shared




type InstanceStateEnum string

const (
    InstanceStateEnumStateUnspecified InstanceStateEnum = "STATE_UNSPECIFIED"
InstanceStateEnumProvisioning InstanceStateEnum = "PROVISIONING"
InstanceStateEnumRunning InstanceStateEnum = "RUNNING"
InstanceStateEnumDeleted InstanceStateEnum = "DELETED"
InstanceStateEnumUpdating InstanceStateEnum = "UPDATING"
InstanceStateEnumStarting InstanceStateEnum = "STARTING"
InstanceStateEnumStopping InstanceStateEnum = "STOPPING"
InstanceStateEnumShutdown InstanceStateEnum = "SHUTDOWN"
)


type Instance struct {
    CreateTime *string `json:"createTime,omitempty"`
    HyperthreadingEnabled *bool `json:"hyperthreadingEnabled,omitempty"`
    ID *string `json:"id,omitempty"`
    InteractiveSerialConsoleEnabled *bool `json:"interactiveSerialConsoleEnabled,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LogicalInterfaces []GoogleCloudBaremetalsolutionV2LogicalInterface `json:"logicalInterfaces,omitempty"`
    LoginInfo *string `json:"loginInfo,omitempty"`
    Luns []Lun `json:"luns,omitempty"`
    MachineType *string `json:"machineType,omitempty"`
    Name *string `json:"name,omitempty"`
    NetworkTemplate *string `json:"networkTemplate,omitempty"`
    Networks []Network `json:"networks,omitempty"`
    OsImage *string `json:"osImage,omitempty"`
    Pod *string `json:"pod,omitempty"`
    State *InstanceStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    Volumes []Volume `json:"volumes,omitempty"`
    
}

