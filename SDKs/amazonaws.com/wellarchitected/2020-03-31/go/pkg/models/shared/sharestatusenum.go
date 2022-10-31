package shared

type ShareStatusEnum string

const (
	ShareStatusEnumAccepted ShareStatusEnum = "ACCEPTED"
	ShareStatusEnumRejected ShareStatusEnum = "REJECTED"
	ShareStatusEnumPending  ShareStatusEnum = "PENDING"
	ShareStatusEnumRevoked  ShareStatusEnum = "REVOKED"
	ShareStatusEnumExpired  ShareStatusEnum = "EXPIRED"
)
