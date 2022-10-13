package shared

type GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum string

const (
	GoogleCloudAssuredworkloadsV1beta1ViolationStateEnumStateUnspecified GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1beta1ViolationStateEnumResolved         GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum = "RESOLVED"
	GoogleCloudAssuredworkloadsV1beta1ViolationStateEnumUnresolved       GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum = "UNRESOLVED"
	GoogleCloudAssuredworkloadsV1beta1ViolationStateEnumException        GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum = "EXCEPTION"
)

type GoogleCloudAssuredworkloadsV1beta1Violation struct {
	Acknowledged          *bool                                                   `json:"acknowledged"`
	AcknowledgementTime   *string                                                 `json:"acknowledgementTime"`
	AuditLogLink          *string                                                 `json:"auditLogLink"`
	BeginTime             *string                                                 `json:"beginTime"`
	Category              *string                                                 `json:"category"`
	Description           *string                                                 `json:"description"`
	ExceptionAuditLogLink *string                                                 `json:"exceptionAuditLogLink"`
	Name                  *string                                                 `json:"name"`
	NonCompliantOrgPolicy *string                                                 `json:"nonCompliantOrgPolicy"`
	OrgPolicyConstraint   *string                                                 `json:"orgPolicyConstraint"`
	Remediation           *GoogleCloudAssuredworkloadsV1beta1ViolationRemediation `json:"remediation"`
	ResolveTime           *string                                                 `json:"resolveTime"`
	State                 *GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum   `json:"state"`
	UpdateTime            *string                                                 `json:"updateTime"`
}
