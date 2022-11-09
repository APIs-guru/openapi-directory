import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CombinedSubmissionActionActionCategoryEnum {
    Notification = "notification"
,    FileUpload = "file_upload"
}

export enum CombinedSubmissionActionActionTypeEnum {
    Webhook = "webhook"
,    SlackWebhook = "slack_webhook"
,    Email = "email"
,    AwsS3Upload = "aws_s3_upload"
}

export enum CombinedSubmissionActionStateEnum {
    Pending = "pending"
,    Processed = "processed"
,    Failed = "failed"
,    Error = "error"
}


export class CombinedSubmissionAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=action_category" })
  actionCategory: CombinedSubmissionActionActionCategoryEnum;

  @Metadata({ data: "json, name=action_type" })
  actionType: CombinedSubmissionActionActionTypeEnum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=integration_id" })
  integrationId: string;

  @Metadata({ data: "json, name=result_data" })
  resultData: Map<string, any>;

  @Metadata({ data: "json, name=state" })
  state: CombinedSubmissionActionStateEnum;
}
