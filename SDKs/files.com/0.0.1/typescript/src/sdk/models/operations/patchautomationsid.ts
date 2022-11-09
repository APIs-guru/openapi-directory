import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchAutomationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PatchAutomationsIdRequestBodyAutomationEnum {
    CreateFolder = "create_folder"
,    RequestFile = "request_file"
,    RequestMove = "request_move"
,    CopyNewestFile = "copy_newest_file"
,    DeleteFile = "delete_file"
,    CopyFile = "copy_file"
,    MoveFile = "move_file"
}

export enum PatchAutomationsIdRequestBodyTriggerEnum {
    Realtime = "realtime"
,    Daily = "daily"
,    CustomSchedule = "custom_schedule"
,    Webhook = "webhook"
,    Email = "email"
,    Action = "action"
}


export class PatchAutomationsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=automation" })
  automation: PatchAutomationsIdRequestBodyAutomationEnum;

  @Metadata({ data: "multipart_form, name=destination" })
  destination?: string;

  @Metadata({ data: "multipart_form, name=destination_replace_from" })
  destinationReplaceFrom?: string;

  @Metadata({ data: "multipart_form, name=destination_replace_to" })
  destinationReplaceTo?: string;

  @Metadata({ data: "multipart_form, name=destinations" })
  destinations?: string[];

  @Metadata({ data: "multipart_form, name=group_ids" })
  groupIds?: string;

  @Metadata({ data: "multipart_form, name=interval" })
  interval?: string;

  @Metadata({ data: "multipart_form, name=path" })
  path?: string;

  @Metadata({ data: "multipart_form, name=schedule;json=true" })
  schedule?: Map<string, any>;

  @Metadata({ data: "multipart_form, name=source" })
  source?: string;

  @Metadata({ data: "multipart_form, name=trigger" })
  trigger?: PatchAutomationsIdRequestBodyTriggerEnum;

  @Metadata({ data: "multipart_form, name=trigger_action_path" })
  triggerActionPath?: string;

  @Metadata({ data: "multipart_form, name=trigger_actions" })
  triggerActions?: string[];

  @Metadata({ data: "multipart_form, name=user_ids" })
  userIds?: string;

  @Metadata({ data: "multipart_form, name=value;json=true" })
  value?: Map<string, any>;
}


export class PatchAutomationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchAutomationsIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PatchAutomationsIdRequestBody;
}


export class PatchAutomationsIdResponse extends SpeakeasyBase {
  @Metadata()
  automationEntity?: shared.AutomationEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
