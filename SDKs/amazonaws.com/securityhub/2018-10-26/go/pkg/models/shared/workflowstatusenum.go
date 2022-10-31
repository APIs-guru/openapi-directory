package shared




type WorkflowStatusEnum string

const (
    WorkflowStatusEnumNew WorkflowStatusEnum = "NEW"
WorkflowStatusEnumNotified WorkflowStatusEnum = "NOTIFIED"
WorkflowStatusEnumResolved WorkflowStatusEnum = "RESOLVED"
WorkflowStatusEnumSuppressed WorkflowStatusEnum = "SUPPRESSED"
)


