import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SubmissionActionActionCategoryEnum {
    Notification = "notification"
,    FileUpload = "file_upload"
}

export enum SubmissionActionActionTypeEnum {
    Webhook = "webhook"
,    SlackWebhook = "slack_webhook"
,    Email = "email"
,    AwsS3Upload = "aws_s3_upload"
}

export enum SubmissionActionStateEnum {
    Pending = "pending"
,    Processed = "processed"
,    Failed = "failed"
,    Error = "error"
}


export class SubmissionAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=action_category" })
  actionCategory: SubmissionActionActionCategoryEnum;

  @Metadata({ data: "json, name=action_type" })
  actionType: SubmissionActionActionTypeEnum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=integration_id" })
  integrationId: string;

  @Metadata({ data: "json, name=result_data" })
  resultData: Map<string, any>;

  @Metadata({ data: "json, name=state" })
  state: SubmissionActionStateEnum;
}
