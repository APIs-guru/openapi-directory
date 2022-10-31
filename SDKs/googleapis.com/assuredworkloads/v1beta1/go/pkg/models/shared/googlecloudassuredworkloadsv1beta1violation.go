package shared




type GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum string

const (
    GoogleCloudAssuredworkloadsV1beta1ViolationStateEnumStateUnspecified GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum = "STATE_UNSPECIFIED"
GoogleCloudAssuredworkloadsV1beta1ViolationStateEnumResolved GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum = "RESOLVED"
GoogleCloudAssuredworkloadsV1beta1ViolationStateEnumUnresolved GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum = "UNRESOLVED"
GoogleCloudAssuredworkloadsV1beta1ViolationStateEnumException GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum = "EXCEPTION"
)


type GoogleCloudAssuredworkloadsV1beta1Violation struct {
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
    Remediation *GoogleCloudAssuredworkloadsV1beta1ViolationRemediation `json:"remediation,omitempty"`
    ResolveTime *string `json:"resolveTime,omitempty"`
    State *GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

