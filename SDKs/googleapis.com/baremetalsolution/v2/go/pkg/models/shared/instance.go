package shared

type InstanceStateEnum string

const (
	InstanceStateEnumStateUnspecified InstanceStateEnum = "STATE_UNSPECIFIED"
	InstanceStateEnumProvisioning     InstanceStateEnum = "PROVISIONING"
	InstanceStateEnumRunning          InstanceStateEnum = "RUNNING"
	InstanceStateEnumDeleted          InstanceStateEnum = "DELETED"
	InstanceStateEnumUpdating         InstanceStateEnum = "UPDATING"
	InstanceStateEnumStarting         InstanceStateEnum = "STARTING"
	InstanceStateEnumStopping         InstanceStateEnum = "STOPPING"
	InstanceStateEnumShutdown         InstanceStateEnum = "SHUTDOWN"
)

type Instance struct {
	CreateTime                      *string                                          `json:"createTime"`
	HyperthreadingEnabled           *bool                                            `json:"hyperthreadingEnabled"`
	ID                              *string                                          `json:"id"`
	InteractiveSerialConsoleEnabled *bool                                            `json:"interactiveSerialConsoleEnabled"`
	Labels                          map[string]string                                `json:"labels"`
	LogicalInterfaces               []GoogleCloudBaremetalsolutionV2LogicalInterface `json:"logicalInterfaces"`
	LoginInfo                       *string                                          `json:"loginInfo"`
	Luns                            []Lun                                            `json:"luns"`
	MachineType                     *string                                          `json:"machineType"`
	Name                            *string                                          `json:"name"`
	NetworkTemplate                 *string                                          `json:"networkTemplate"`
	Networks                        []Network                                        `json:"networks"`
	OsImage                         *string                                          `json:"osImage"`
	Pod                             *string                                          `json:"pod"`
	State                           *InstanceStateEnum                               `json:"state"`
	UpdateTime                      *string                                          `json:"updateTime"`
	Volumes                         []Volume                                         `json:"volumes"`
}
