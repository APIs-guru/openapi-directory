import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAlarmsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmName" })
  alarmName?: string;

  @Metadata({ data: "json, name=monitoredResourceName" })
  monitoredResourceName?: string;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
