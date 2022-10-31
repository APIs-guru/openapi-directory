package shared




type ScopeEnum string

const (
    ScopeEnumWriteSettings ScopeEnum = "write-settings"
ScopeEnumViewBuilds ScopeEnum = "view-builds"
ScopeEnumReadSettings ScopeEnum = "read-settings"
ScopeEnumTriggerBuilds ScopeEnum = "trigger-builds"
ScopeEnumAll ScopeEnum = "all"
ScopeEnumStatus ScopeEnum = "status"
ScopeEnumNone ScopeEnum = "none"
)


