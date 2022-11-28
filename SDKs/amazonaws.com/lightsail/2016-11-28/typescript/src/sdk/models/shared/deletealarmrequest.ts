import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAlarmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmName" })
  alarmName: string;
}
