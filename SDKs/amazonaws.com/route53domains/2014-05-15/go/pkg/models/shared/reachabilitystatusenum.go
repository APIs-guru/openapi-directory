package shared

type ReachabilityStatusEnum string

const (
	ReachabilityStatusEnumPending ReachabilityStatusEnum = "PENDING"
	ReachabilityStatusEnumDone    ReachabilityStatusEnum = "DONE"
	ReachabilityStatusEnumExpired ReachabilityStatusEnum = "EXPIRED"
)
