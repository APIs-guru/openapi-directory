package shared

type ChangeTokenStatusEnum string

const (
	ChangeTokenStatusEnumProvisioned ChangeTokenStatusEnum = "PROVISIONED"
	ChangeTokenStatusEnumPending     ChangeTokenStatusEnum = "PENDING"
	ChangeTokenStatusEnumInsync      ChangeTokenStatusEnum = "INSYNC"
)
