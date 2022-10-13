package shared

type WorkflowStateEnum string

const (
	WorkflowStateEnumNew        WorkflowStateEnum = "NEW"
	WorkflowStateEnumAssigned   WorkflowStateEnum = "ASSIGNED"
	WorkflowStateEnumInProgress WorkflowStateEnum = "IN_PROGRESS"
	WorkflowStateEnumDeferred   WorkflowStateEnum = "DEFERRED"
	WorkflowStateEnumResolved   WorkflowStateEnum = "RESOLVED"
)
