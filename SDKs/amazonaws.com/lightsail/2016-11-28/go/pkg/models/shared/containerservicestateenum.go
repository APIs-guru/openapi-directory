package shared




type ContainerServiceStateEnum string

const (
    ContainerServiceStateEnumPending ContainerServiceStateEnum = "PENDING"
ContainerServiceStateEnumReady ContainerServiceStateEnum = "READY"
ContainerServiceStateEnumRunning ContainerServiceStateEnum = "RUNNING"
ContainerServiceStateEnumUpdating ContainerServiceStateEnum = "UPDATING"
ContainerServiceStateEnumDeleting ContainerServiceStateEnum = "DELETING"
ContainerServiceStateEnumDisabled ContainerServiceStateEnum = "DISABLED"
ContainerServiceStateEnumDeploying ContainerServiceStateEnum = "DEPLOYING"
)


