import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparison" })
  comparison?: string;

  @Metadata({ data: "json, name=custom_attribute_name" })
  customAttributeName?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_attribute" })
  customAttribute?: ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute;
}


export class ScheduleApiTriggeredCanvasesRequestBodyAudience extends SpeakeasyBase {
  @Metadata({ data: "json, name=AND", elemType: operations.ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd })
  and?: ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd[];
}


export class ScheduleApiTriggeredCanvasesRequestBodyRecipients extends SpeakeasyBase {
  @Metadata({ data: "json, name=canvas_entry_properties" })
  canvasEntryProperties?: Map<string, any>;

  @Metadata({ data: "json, name=external_user_id" })
  externalUserId?: string;

  @Metadata({ data: "json, name=trigger_properties" })
  triggerProperties?: string;

  @Metadata({ data: "json, name=user_alias" })
  userAlias?: string;
}


export class ScheduleApiTriggeredCanvasesRequestBodySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=at_optimal_time" })
  atOptimalTime?: boolean;

  @Metadata({ data: "json, name=in_local_time" })
  inLocalTime?: boolean;

  @Metadata({ data: "json, name=time" })
  time?: string;
}


export class ScheduleApiTriggeredCanvasesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=audience" })
  audience?: ScheduleApiTriggeredCanvasesRequestBodyAudience;

  @Metadata({ data: "json, name=broadcast" })
  broadcast?: boolean;

  @Metadata({ data: "json, name=canvas_entry_properties" })
  canvasEntryProperties?: Map<string, any>;

  @Metadata({ data: "json, name=canvas_id" })
  canvasId?: string;

  @Metadata({ data: "json, name=recipients", elemType: operations.ScheduleApiTriggeredCanvasesRequestBodyRecipients })
  recipients?: ScheduleApiTriggeredCanvasesRequestBodyRecipients[];

  @Metadata({ data: "json, name=schedule" })
  schedule?: ScheduleApiTriggeredCanvasesRequestBodySchedule;
}


export class ScheduleApiTriggeredCanvasesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: ScheduleApiTriggeredCanvasesRequestBody;
}


export class ScheduleApiTriggeredCanvasesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
