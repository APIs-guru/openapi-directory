package shared

type InstallFailureEventFailureReasonEnum string

const (
	InstallFailureEventFailureReasonEnumUnknown InstallFailureEventFailureReasonEnum = "unknown"
	InstallFailureEventFailureReasonEnumTimeout InstallFailureEventFailureReasonEnum = "timeout"
)

type InstallFailureEvent struct {
	DeviceID       *string                               `json:"deviceId"`
	FailureDetails *string                               `json:"failureDetails"`
	FailureReason  *InstallFailureEventFailureReasonEnum `json:"failureReason"`
	ProductID      *string                               `json:"productId"`
	UserID         *string                               `json:"userId"`
}
