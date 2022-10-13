package shared

type InstanceHealthReasonEnum string

const (
	InstanceHealthReasonEnumLbRegistrationInProgress         InstanceHealthReasonEnum = "Lb.RegistrationInProgress"
	InstanceHealthReasonEnumLbInitialHealthChecking          InstanceHealthReasonEnum = "Lb.InitialHealthChecking"
	InstanceHealthReasonEnumLbInternalError                  InstanceHealthReasonEnum = "Lb.InternalError"
	InstanceHealthReasonEnumInstanceResponseCodeMismatch     InstanceHealthReasonEnum = "Instance.ResponseCodeMismatch"
	InstanceHealthReasonEnumInstanceTimeout                  InstanceHealthReasonEnum = "Instance.Timeout"
	InstanceHealthReasonEnumInstanceFailedHealthChecks       InstanceHealthReasonEnum = "Instance.FailedHealthChecks"
	InstanceHealthReasonEnumInstanceNotRegistered            InstanceHealthReasonEnum = "Instance.NotRegistered"
	InstanceHealthReasonEnumInstanceNotInUse                 InstanceHealthReasonEnum = "Instance.NotInUse"
	InstanceHealthReasonEnumInstanceDeregistrationInProgress InstanceHealthReasonEnum = "Instance.DeregistrationInProgress"
	InstanceHealthReasonEnumInstanceInvalidState             InstanceHealthReasonEnum = "Instance.InvalidState"
	InstanceHealthReasonEnumInstanceIPUnusable               InstanceHealthReasonEnum = "Instance.IpUnusable"
)
