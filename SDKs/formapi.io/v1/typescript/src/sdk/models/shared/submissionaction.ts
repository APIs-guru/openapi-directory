import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubmissionActionActionCategoryEnum {
    Notification = "notification",
    FileUpload = "file_upload"
}

export enum SubmissionActionActionTypeEnum {
    Webhook = "webhook",
    SlackWebhook = "slack_webhook",
    Email = "email",
    AwsS3Upload = "aws_s3_upload"
}

export enum SubmissionActionStateEnum {
    Pending = "pending",
    Processed = "processed",
    Failed = "failed",
    Error = "error"
}


export class SubmissionAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_category" })
  actionCategory: SubmissionActionActionCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=action_type" })
  actionType: SubmissionActionActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=integration_id" })
  integrationId: string;

  @SpeakeasyMetadata({ data: "json, name=result_data" })
  resultData: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: SubmissionActionStateEnum;
}
