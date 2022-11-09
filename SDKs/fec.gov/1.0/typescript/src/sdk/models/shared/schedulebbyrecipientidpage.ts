import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleBByRecipientId } from "./schedulebbyrecipientid";


export class ScheduleBByRecipientIdPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.ScheduleBByRecipientId })
  results?: ScheduleBByRecipientId[];
}
