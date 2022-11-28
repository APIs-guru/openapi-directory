package shared

type AuthorizationStatusEnum string

const (
	AuthorizationStatusEnumAuthorized AuthorizationStatusEnum = "Authorized"
	AuthorizationStatusEnumRevoking   AuthorizationStatusEnum = "Revoking"
)
