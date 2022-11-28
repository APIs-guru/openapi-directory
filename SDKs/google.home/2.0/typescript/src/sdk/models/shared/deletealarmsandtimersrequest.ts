import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAlarmsandTimersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];
}
