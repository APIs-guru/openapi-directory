package shared




type SubmissionActionActionCategoryEnum string

const (
    SubmissionActionActionCategoryEnumNotification SubmissionActionActionCategoryEnum = "notification"
SubmissionActionActionCategoryEnumFileUpload SubmissionActionActionCategoryEnum = "file_upload"
)



type SubmissionActionActionTypeEnum string

const (
    SubmissionActionActionTypeEnumWebhook SubmissionActionActionTypeEnum = "webhook"
SubmissionActionActionTypeEnumSlackWebhook SubmissionActionActionTypeEnum = "slack_webhook"
SubmissionActionActionTypeEnumEmail SubmissionActionActionTypeEnum = "email"
SubmissionActionActionTypeEnumAwsS3Upload SubmissionActionActionTypeEnum = "aws_s3_upload"
)



type SubmissionActionStateEnum string

const (
    SubmissionActionStateEnumPending SubmissionActionStateEnum = "pending"
SubmissionActionStateEnumProcessed SubmissionActionStateEnum = "processed"
SubmissionActionStateEnumFailed SubmissionActionStateEnum = "failed"
SubmissionActionStateEnumError SubmissionActionStateEnum = "error"
)


type SubmissionAction struct {
    ActionCategory SubmissionActionActionCategoryEnum `json:"action_category"`
    ActionType SubmissionActionActionTypeEnum `json:"action_type"`
    ID string `json:"id"`
    IntegrationID string `json:"integration_id"`
    ResultData map[string]interface{} `json:"result_data"`
    State SubmissionActionStateEnum `json:"state"`
    
}

