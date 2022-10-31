package shared




type EgressFromIdentityTypeEnum string

const (
    EgressFromIdentityTypeEnumIdentityTypeUnspecified EgressFromIdentityTypeEnum = "IDENTITY_TYPE_UNSPECIFIED"
EgressFromIdentityTypeEnumAnyIdentity EgressFromIdentityTypeEnum = "ANY_IDENTITY"
EgressFromIdentityTypeEnumAnyUserAccount EgressFromIdentityTypeEnum = "ANY_USER_ACCOUNT"
EgressFromIdentityTypeEnumAnyServiceAccount EgressFromIdentityTypeEnum = "ANY_SERVICE_ACCOUNT"
)


type EgressFrom struct {
    Identities []string `json:"identities,omitempty"`
    IdentityType *EgressFromIdentityTypeEnum `json:"identityType,omitempty"`
    
}

