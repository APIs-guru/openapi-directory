import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleBByPurpose } from "./schedulebbypurpose";



export class ScheduleBByPurposePage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ScheduleBByPurpose })
  results?: ScheduleBByPurpose[];
}
