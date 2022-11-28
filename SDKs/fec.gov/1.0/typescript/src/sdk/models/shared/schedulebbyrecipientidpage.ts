import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleBByRecipientId } from "./schedulebbyrecipientid";



export class ScheduleBByRecipientIdPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ScheduleBByRecipientId })
  results?: ScheduleBByRecipientId[];
}
