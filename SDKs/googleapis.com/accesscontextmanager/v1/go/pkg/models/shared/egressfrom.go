package shared

type EgressFromIdentityTypeEnum string

const (
	EgressFromIdentityTypeEnumIdentityTypeUnspecified EgressFromIdentityTypeEnum = "IDENTITY_TYPE_UNSPECIFIED"
	EgressFromIdentityTypeEnumAnyIdentity             EgressFromIdentityTypeEnum = "ANY_IDENTITY"
	EgressFromIdentityTypeEnumAnyUserAccount          EgressFromIdentityTypeEnum = "ANY_USER_ACCOUNT"
	EgressFromIdentityTypeEnumAnyServiceAccount       EgressFromIdentityTypeEnum = "ANY_SERVICE_ACCOUNT"
)

// EgressFrom
// Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed.
type EgressFrom struct {
	Identities   []string                    `json:"identities,omitempty"`
	IdentityType *EgressFromIdentityTypeEnum `json:"identityType,omitempty"`
}
