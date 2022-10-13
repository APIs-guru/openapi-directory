package shared

type AutomationExecutionFilterKeyEnum string

const (
	AutomationExecutionFilterKeyEnumDocumentNamePrefix  AutomationExecutionFilterKeyEnum = "DocumentNamePrefix"
	AutomationExecutionFilterKeyEnumExecutionStatus     AutomationExecutionFilterKeyEnum = "ExecutionStatus"
	AutomationExecutionFilterKeyEnumExecutionID         AutomationExecutionFilterKeyEnum = "ExecutionId"
	AutomationExecutionFilterKeyEnumParentExecutionID   AutomationExecutionFilterKeyEnum = "ParentExecutionId"
	AutomationExecutionFilterKeyEnumCurrentAction       AutomationExecutionFilterKeyEnum = "CurrentAction"
	AutomationExecutionFilterKeyEnumStartTimeBefore     AutomationExecutionFilterKeyEnum = "StartTimeBefore"
	AutomationExecutionFilterKeyEnumStartTimeAfter      AutomationExecutionFilterKeyEnum = "StartTimeAfter"
	AutomationExecutionFilterKeyEnumAutomationType      AutomationExecutionFilterKeyEnum = "AutomationType"
	AutomationExecutionFilterKeyEnumTagKey              AutomationExecutionFilterKeyEnum = "TagKey"
	AutomationExecutionFilterKeyEnumTargetResourceGroup AutomationExecutionFilterKeyEnum = "TargetResourceGroup"
	AutomationExecutionFilterKeyEnumAutomationSubtype   AutomationExecutionFilterKeyEnum = "AutomationSubtype"
	AutomationExecutionFilterKeyEnumOpsItemID           AutomationExecutionFilterKeyEnum = "OpsItemId"
)
