import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAlarmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmName" })
  alarmName?: string;

  @SpeakeasyMetadata({ data: "json, name=monitoredResourceName" })
  monitoredResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
