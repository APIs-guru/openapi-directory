package shared

type CodeScanningSarifsStatusProcessingStatusEnum string

const (
	CodeScanningSarifsStatusProcessingStatusEnumPending  CodeScanningSarifsStatusProcessingStatusEnum = "pending"
	CodeScanningSarifsStatusProcessingStatusEnumComplete CodeScanningSarifsStatusProcessingStatusEnum = "complete"
)

type CodeScanningSarifsStatus struct {
	AnalysesURL      *string                                       `json:"analyses_url"`
	ProcessingStatus *CodeScanningSarifsStatusProcessingStatusEnum `json:"processing_status"`
}
