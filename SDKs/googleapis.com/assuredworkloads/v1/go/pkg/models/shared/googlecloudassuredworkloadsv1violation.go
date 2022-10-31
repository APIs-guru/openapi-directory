package shared




type GoogleCloudAssuredworkloadsV1ViolationStateEnum string

const (
    GoogleCloudAssuredworkloadsV1ViolationStateEnumStateUnspecified GoogleCloudAssuredworkloadsV1ViolationStateEnum = "STATE_UNSPECIFIED"
GoogleCloudAssuredworkloadsV1ViolationStateEnumResolved GoogleCloudAssuredworkloadsV1ViolationStateEnum = "RESOLVED"
GoogleCloudAssuredworkloadsV1ViolationStateEnumUnresolved GoogleCloudAssuredworkloadsV1ViolationStateEnum = "UNRESOLVED"
GoogleCloudAssuredworkloadsV1ViolationStateEnumException GoogleCloudAssuredworkloadsV1ViolationStateEnum = "EXCEPTION"
)


type GoogleCloudAssuredworkloadsV1Violation struct {
    Acknowledged *bool `json:"acknowledged,omitempty"`
    AcknowledgementTime *string `json:"acknowledgementTime,omitempty"`
    AuditLogLink *string `json:"auditLogLink,omitempty"`
    BeginTime *string `json:"beginTime,omitempty"`
    Category *string `json:"category,omitempty"`
    Description *string `json:"description,omitempty"`
    ExceptionAuditLogLink *string `json:"exceptionAuditLogLink,omitempty"`
    Name *string `json:"name,omitempty"`
    NonCompliantOrgPolicy *string `json:"nonCompliantOrgPolicy,omitempty"`
    OrgPolicyConstraint *string `json:"orgPolicyConstraint,omitempty"`
    Remediation *GoogleCloudAssuredworkloadsV1ViolationRemediation `json:"remediation,omitempty"`
    ResolveTime *string `json:"resolveTime,omitempty"`
    State *GoogleCloudAssuredworkloadsV1ViolationStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

