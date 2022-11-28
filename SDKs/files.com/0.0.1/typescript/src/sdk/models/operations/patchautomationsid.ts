import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchAutomationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PatchAutomationsIdRequestBodyAutomationEnum {
    CreateFolder = "create_folder",
    RequestFile = "request_file",
    RequestMove = "request_move",
    CopyNewestFile = "copy_newest_file",
    DeleteFile = "delete_file",
    CopyFile = "copy_file",
    MoveFile = "move_file"
}

export enum PatchAutomationsIdRequestBodyTriggerEnum {
    Realtime = "realtime",
    Daily = "daily",
    CustomSchedule = "custom_schedule",
    Webhook = "webhook",
    Email = "email",
    Action = "action"
}


export class PatchAutomationsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=automation" })
  automation: PatchAutomationsIdRequestBodyAutomationEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=destination_replace_from" })
  destinationReplaceFrom?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=destination_replace_to" })
  destinationReplaceTo?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=destinations" })
  destinations?: string[];

  @SpeakeasyMetadata({ data: "multipart_form, name=group_ids" })
  groupIds?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=interval" })
  interval?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=schedule;json=true" })
  schedule?: Map<string, any>;

  @SpeakeasyMetadata({ data: "multipart_form, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=trigger" })
  trigger?: PatchAutomationsIdRequestBodyTriggerEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=trigger_action_path" })
  triggerActionPath?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=trigger_actions" })
  triggerActions?: string[];

  @SpeakeasyMetadata({ data: "multipart_form, name=user_ids" })
  userIds?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=value;json=true" })
  value?: Map<string, any>;
}


export class PatchAutomationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchAutomationsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PatchAutomationsIdRequestBody;
}


export class PatchAutomationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  automationEntity?: shared.AutomationEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
