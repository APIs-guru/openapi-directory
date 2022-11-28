import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparison" })
  comparison?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_attribute_name" })
  customAttributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_attribute" })
  customAttribute?: ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute;
}


export class ScheduleApiTriggeredCanvasesRequestBodyAudience extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AND", elemType: ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd })
  and?: ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd[];
}


export class ScheduleApiTriggeredCanvasesRequestBodyRecipients extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canvas_entry_properties" })
  canvasEntryProperties?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=external_user_id" })
  externalUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger_properties" })
  triggerProperties?: string;

  @SpeakeasyMetadata({ data: "json, name=user_alias" })
  userAlias?: string;
}


export class ScheduleApiTriggeredCanvasesRequestBodySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=at_optimal_time" })
  atOptimalTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=in_local_time" })
  inLocalTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}


export class ScheduleApiTriggeredCanvasesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: ScheduleApiTriggeredCanvasesRequestBodyAudience;

  @SpeakeasyMetadata({ data: "json, name=broadcast" })
  broadcast?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canvas_entry_properties" })
  canvasEntryProperties?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=canvas_id" })
  canvasId?: string;

  @SpeakeasyMetadata({ data: "json, name=recipients", elemType: ScheduleApiTriggeredCanvasesRequestBodyRecipients })
  recipients?: ScheduleApiTriggeredCanvasesRequestBodyRecipients[];

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: ScheduleApiTriggeredCanvasesRequestBodySchedule;
}


export class ScheduleApiTriggeredCanvasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ScheduleApiTriggeredCanvasesRequestBody;
}


export class ScheduleApiTriggeredCanvasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
