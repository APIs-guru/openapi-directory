package shared

type CancelSurveyResultReasonEnum string

const (
	CancelSurveyResultReasonEnumCancelSurveyReasonUnspecified     CancelSurveyResultReasonEnum = "CANCEL_SURVEY_REASON_UNSPECIFIED"
	CancelSurveyResultReasonEnumCancelSurveyReasonNotEnoughUsage  CancelSurveyResultReasonEnum = "CANCEL_SURVEY_REASON_NOT_ENOUGH_USAGE"
	CancelSurveyResultReasonEnumCancelSurveyReasonTechnicalIssues CancelSurveyResultReasonEnum = "CANCEL_SURVEY_REASON_TECHNICAL_ISSUES"
	CancelSurveyResultReasonEnumCancelSurveyReasonCostRelated     CancelSurveyResultReasonEnum = "CANCEL_SURVEY_REASON_COST_RELATED"
	CancelSurveyResultReasonEnumCancelSurveyReasonFoundBetterApp  CancelSurveyResultReasonEnum = "CANCEL_SURVEY_REASON_FOUND_BETTER_APP"
	CancelSurveyResultReasonEnumCancelSurveyReasonOthers          CancelSurveyResultReasonEnum = "CANCEL_SURVEY_REASON_OTHERS"
)

// CancelSurveyResult
// Result of the cancel survey when the subscription was canceled by the user.
type CancelSurveyResult struct {
	Reason          *CancelSurveyResultReasonEnum `json:"reason,omitempty"`
	ReasonUserInput *string                       `json:"reasonUserInput,omitempty"`
}
