package shared

type InstallFailureEventFailureReasonEnum string

const (
	InstallFailureEventFailureReasonEnumUnknown InstallFailureEventFailureReasonEnum = "unknown"
	InstallFailureEventFailureReasonEnumTimeout InstallFailureEventFailureReasonEnum = "timeout"
)

// InstallFailureEvent
// An event generated when an app installation failed on a device
type InstallFailureEvent struct {
	DeviceID       *string                               `json:"deviceId,omitempty"`
	FailureDetails *string                               `json:"failureDetails,omitempty"`
	FailureReason  *InstallFailureEventFailureReasonEnum `json:"failureReason,omitempty"`
	ProductID      *string                               `json:"productId,omitempty"`
	UserID         *string                               `json:"userId,omitempty"`
}
