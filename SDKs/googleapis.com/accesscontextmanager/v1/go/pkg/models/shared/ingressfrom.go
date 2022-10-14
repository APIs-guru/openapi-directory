package shared

type IngressFromIdentityTypeEnum string

const (
	IngressFromIdentityTypeEnumIdentityTypeUnspecified IngressFromIdentityTypeEnum = "IDENTITY_TYPE_UNSPECIFIED"
	IngressFromIdentityTypeEnumAnyIdentity             IngressFromIdentityTypeEnum = "ANY_IDENTITY"
	IngressFromIdentityTypeEnumAnyUserAccount          IngressFromIdentityTypeEnum = "ANY_USER_ACCOUNT"
	IngressFromIdentityTypeEnumAnyServiceAccount       IngressFromIdentityTypeEnum = "ANY_SERVICE_ACCOUNT"
)

type IngressFrom struct {
	Identities   []string                     `json:"identities,omitempty"`
	IdentityType *IngressFromIdentityTypeEnum `json:"identityType,omitempty"`
	Sources      []IngressSource              `json:"sources,omitempty"`
}
