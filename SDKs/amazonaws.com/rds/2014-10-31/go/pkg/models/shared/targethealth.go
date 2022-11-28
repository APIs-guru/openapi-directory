package shared

// TargetHealth
// Information about the connection health of an RDS Proxy target.
type TargetHealth struct {
	Description *string
	Reason      *TargetHealthReasonEnum
	State       *TargetStateEnum
}
