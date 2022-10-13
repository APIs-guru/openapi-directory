package shared

type ConnectorStateEnum string

const (
	ConnectorStateEnumRunning  ConnectorStateEnum = "RUNNING"
	ConnectorStateEnumCreating ConnectorStateEnum = "CREATING"
	ConnectorStateEnumUpdating ConnectorStateEnum = "UPDATING"
	ConnectorStateEnumDeleting ConnectorStateEnum = "DELETING"
	ConnectorStateEnumFailed   ConnectorStateEnum = "FAILED"
)
