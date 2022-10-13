package shared

type PolicyTypeStatusEnum string

const (
	PolicyTypeStatusEnumEnabled        PolicyTypeStatusEnum = "ENABLED"
	PolicyTypeStatusEnumPendingEnable  PolicyTypeStatusEnum = "PENDING_ENABLE"
	PolicyTypeStatusEnumPendingDisable PolicyTypeStatusEnum = "PENDING_DISABLE"
)
