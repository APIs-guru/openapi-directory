import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AutomationEntityAutomationEnum {
    CreateFolder = "create_folder",
    RequestFile = "request_file",
    RequestMove = "request_move",
    CopyNewestFile = "copy_newest_file",
    DeleteFile = "delete_file",
    CopyFile = "copy_file",
    MoveFile = "move_file"
}

export enum AutomationEntityTriggerEnum {
    Realtime = "realtime",
    Daily = "daily",
    CustomSchedule = "custom_schedule",
    Webhook = "webhook",
    Email = "email",
    Action = "action"
}


// AutomationEntity
/** 
 * List Automations
**/
export class AutomationEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automation" })
  automation?: AutomationEntityAutomationEnum;

  @SpeakeasyMetadata({ data: "json, name=destination_replace_from" })
  destinationReplaceFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_replace_to" })
  destinationReplaceTo?: string;

  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations?: string;

  @SpeakeasyMetadata({ data: "json, name=group_ids" })
  groupIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: string;

  @SpeakeasyMetadata({ data: "json, name=next_process_on" })
  nextProcessOn?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger?: AutomationEntityTriggerEnum;

  @SpeakeasyMetadata({ data: "json, name=trigger_action_path" })
  triggerActionPath?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger_actions" })
  triggerActions?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=user_ids" })
  userIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
