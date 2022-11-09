import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AutomationEntityAutomationEnum {
    CreateFolder = "create_folder"
,    RequestFile = "request_file"
,    RequestMove = "request_move"
,    CopyNewestFile = "copy_newest_file"
,    DeleteFile = "delete_file"
,    CopyFile = "copy_file"
,    MoveFile = "move_file"
}

export enum AutomationEntityTriggerEnum {
    Realtime = "realtime"
,    Daily = "daily"
,    CustomSchedule = "custom_schedule"
,    Webhook = "webhook"
,    Email = "email"
,    Action = "action"
}


// AutomationEntity
/** 
 * List Automations
**/
export class AutomationEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=automation" })
  automation?: AutomationEntityAutomationEnum;

  @Metadata({ data: "json, name=destination_replace_from" })
  destinationReplaceFrom?: string;

  @Metadata({ data: "json, name=destination_replace_to" })
  destinationReplaceTo?: string;

  @Metadata({ data: "json, name=destinations" })
  destinations?: string;

  @Metadata({ data: "json, name=group_ids" })
  groupIds?: number[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interval" })
  interval?: string;

  @Metadata({ data: "json, name=next_process_on" })
  nextProcessOn?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: Map<string, any>;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=trigger" })
  trigger?: AutomationEntityTriggerEnum;

  @Metadata({ data: "json, name=trigger_action_path" })
  triggerActionPath?: string;

  @Metadata({ data: "json, name=trigger_actions" })
  triggerActions?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;

  @Metadata({ data: "json, name=user_ids" })
  userIds?: number[];

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;

  @Metadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
