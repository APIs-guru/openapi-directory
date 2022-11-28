package shared

type IngressFromIdentityTypeEnum string

const (
	IngressFromIdentityTypeEnumIdentityTypeUnspecified IngressFromIdentityTypeEnum = "IDENTITY_TYPE_UNSPECIFIED"
	IngressFromIdentityTypeEnumAnyIdentity             IngressFromIdentityTypeEnum = "ANY_IDENTITY"
	IngressFromIdentityTypeEnumAnyUserAccount          IngressFromIdentityTypeEnum = "ANY_USER_ACCOUNT"
	IngressFromIdentityTypeEnumAnyServiceAccount       IngressFromIdentityTypeEnum = "ANY_SERVICE_ACCOUNT"
)

// IngressFrom
// Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.
type IngressFrom struct {
	Identities   []string                     `json:"identities,omitempty"`
	IdentityType *IngressFromIdentityTypeEnum `json:"identityType,omitempty"`
	Sources      []IngressSource              `json:"sources,omitempty"`
}
