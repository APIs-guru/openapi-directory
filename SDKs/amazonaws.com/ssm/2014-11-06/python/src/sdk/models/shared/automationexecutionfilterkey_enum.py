from dataclasses import dataclass, field
from enum import Enum

class AutomationExecutionFilterKeyEnum(str, Enum):
    DOCUMENT_NAME_PREFIX = "DocumentNamePrefix"
    EXECUTION_STATUS = "ExecutionStatus"
    EXECUTION_ID = "ExecutionId"
    PARENT_EXECUTION_ID = "ParentExecutionId"
    CURRENT_ACTION = "CurrentAction"
    START_TIME_BEFORE = "StartTimeBefore"
    START_TIME_AFTER = "StartTimeAfter"
    AUTOMATION_TYPE = "AutomationType"
    TAG_KEY = "TagKey"
    TARGET_RESOURCE_GROUP = "TargetResourceGroup"
    AUTOMATION_SUBTYPE = "AutomationSubtype"
    OPS_ITEM_ID = "OpsItemId"

