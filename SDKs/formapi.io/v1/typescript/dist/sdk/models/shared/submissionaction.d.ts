import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SubmissionActionActionCategoryEnum {
    Notification = "notification",
    FileUpload = "file_upload"
}
export declare enum SubmissionActionActionTypeEnum {
    Webhook = "webhook",
    SlackWebhook = "slack_webhook",
    Email = "email",
    AwsS3Upload = "aws_s3_upload"
}
export declare enum SubmissionActionStateEnum {
    Pending = "pending",
    Processed = "processed",
    Failed = "failed",
    Error = "error"
}
export declare class SubmissionAction extends SpeakeasyBase {
    actionCategory: SubmissionActionActionCategoryEnum;
    actionType: SubmissionActionActionTypeEnum;
    id: string;
    integrationId: string;
    resultData: Map<string, any>;
    state: SubmissionActionStateEnum;
}
