package shared

type CombinedSubmissionActionActionCategoryEnum string

const (
	CombinedSubmissionActionActionCategoryEnumNotification CombinedSubmissionActionActionCategoryEnum = "notification"
	CombinedSubmissionActionActionCategoryEnumFileUpload   CombinedSubmissionActionActionCategoryEnum = "file_upload"
)

type CombinedSubmissionActionActionTypeEnum string

const (
	CombinedSubmissionActionActionTypeEnumWebhook      CombinedSubmissionActionActionTypeEnum = "webhook"
	CombinedSubmissionActionActionTypeEnumSlackWebhook CombinedSubmissionActionActionTypeEnum = "slack_webhook"
	CombinedSubmissionActionActionTypeEnumEmail        CombinedSubmissionActionActionTypeEnum = "email"
	CombinedSubmissionActionActionTypeEnumAwsS3Upload  CombinedSubmissionActionActionTypeEnum = "aws_s3_upload"
)

type CombinedSubmissionActionStateEnum string

const (
	CombinedSubmissionActionStateEnumPending   CombinedSubmissionActionStateEnum = "pending"
	CombinedSubmissionActionStateEnumProcessed CombinedSubmissionActionStateEnum = "processed"
	CombinedSubmissionActionStateEnumFailed    CombinedSubmissionActionStateEnum = "failed"
	CombinedSubmissionActionStateEnumError     CombinedSubmissionActionStateEnum = "error"
)

type CombinedSubmissionAction struct {
	ActionCategory CombinedSubmissionActionActionCategoryEnum `json:"action_category"`
	ActionType     CombinedSubmissionActionActionTypeEnum     `json:"action_type"`
	ID             string                                     `json:"id"`
	IntegrationID  string                                     `json:"integration_id"`
	ResultData     map[string]interface{}                     `json:"result_data"`
	State          CombinedSubmissionActionStateEnum          `json:"state"`
}
