package shared

type GoogleCloudAssuredworkloadsV1ViolationStateEnum string

const (
	GoogleCloudAssuredworkloadsV1ViolationStateEnumStateUnspecified GoogleCloudAssuredworkloadsV1ViolationStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1ViolationStateEnumResolved         GoogleCloudAssuredworkloadsV1ViolationStateEnum = "RESOLVED"
	GoogleCloudAssuredworkloadsV1ViolationStateEnumUnresolved       GoogleCloudAssuredworkloadsV1ViolationStateEnum = "UNRESOLVED"
	GoogleCloudAssuredworkloadsV1ViolationStateEnumException        GoogleCloudAssuredworkloadsV1ViolationStateEnum = "EXCEPTION"
)

type GoogleCloudAssuredworkloadsV1Violation struct {
	Acknowledged          *bool                                              `json:"acknowledged"`
	AcknowledgementTime   *string                                            `json:"acknowledgementTime"`
	AuditLogLink          *string                                            `json:"auditLogLink"`
	BeginTime             *string                                            `json:"beginTime"`
	Category              *string                                            `json:"category"`
	Description           *string                                            `json:"description"`
	ExceptionAuditLogLink *string                                            `json:"exceptionAuditLogLink"`
	Name                  *string                                            `json:"name"`
	NonCompliantOrgPolicy *string                                            `json:"nonCompliantOrgPolicy"`
	OrgPolicyConstraint   *string                                            `json:"orgPolicyConstraint"`
	Remediation           *GoogleCloudAssuredworkloadsV1ViolationRemediation `json:"remediation"`
	ResolveTime           *string                                            `json:"resolveTime"`
	State                 *GoogleCloudAssuredworkloadsV1ViolationStateEnum   `json:"state"`
	UpdateTime            *string                                            `json:"updateTime"`
}
