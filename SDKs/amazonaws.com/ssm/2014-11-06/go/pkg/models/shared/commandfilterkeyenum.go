package shared

type CommandFilterKeyEnum string

const (
	CommandFilterKeyEnumInvokedAfter   CommandFilterKeyEnum = "InvokedAfter"
	CommandFilterKeyEnumInvokedBefore  CommandFilterKeyEnum = "InvokedBefore"
	CommandFilterKeyEnumStatus         CommandFilterKeyEnum = "Status"
	CommandFilterKeyEnumExecutionStage CommandFilterKeyEnum = "ExecutionStage"
	CommandFilterKeyEnumDocumentName   CommandFilterKeyEnum = "DocumentName"
)
