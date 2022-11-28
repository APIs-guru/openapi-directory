import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CombinedSubmissionActionActionCategoryEnum {
    Notification = "notification",
    FileUpload = "file_upload"
}

export enum CombinedSubmissionActionActionTypeEnum {
    Webhook = "webhook",
    SlackWebhook = "slack_webhook",
    Email = "email",
    AwsS3Upload = "aws_s3_upload"
}

export enum CombinedSubmissionActionStateEnum {
    Pending = "pending",
    Processed = "processed",
    Failed = "failed",
    Error = "error"
}


export class CombinedSubmissionAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_category" })
  actionCategory: CombinedSubmissionActionActionCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=action_type" })
  actionType: CombinedSubmissionActionActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=integration_id" })
  integrationId: string;

  @SpeakeasyMetadata({ data: "json, name=result_data" })
  resultData: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: CombinedSubmissionActionStateEnum;
}
