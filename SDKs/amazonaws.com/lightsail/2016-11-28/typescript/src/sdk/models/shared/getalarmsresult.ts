import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";



export class GetAlarmsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarms", elemType: Alarm })
  alarms?: Alarm[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
