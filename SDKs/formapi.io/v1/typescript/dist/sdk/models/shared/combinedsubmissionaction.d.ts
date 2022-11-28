import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CombinedSubmissionActionActionCategoryEnum {
    Notification = "notification",
    FileUpload = "file_upload"
}
export declare enum CombinedSubmissionActionActionTypeEnum {
    Webhook = "webhook",
    SlackWebhook = "slack_webhook",
    Email = "email",
    AwsS3Upload = "aws_s3_upload"
}
export declare enum CombinedSubmissionActionStateEnum {
    Pending = "pending",
    Processed = "processed",
    Failed = "failed",
    Error = "error"
}
export declare class CombinedSubmissionAction extends SpeakeasyBase {
    actionCategory: CombinedSubmissionActionActionCategoryEnum;
    actionType: CombinedSubmissionActionActionTypeEnum;
    id: string;
    integrationId: string;
    resultData: Map<string, any>;
    state: CombinedSubmissionActionStateEnum;
}
