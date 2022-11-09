import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleBByRecipient } from "./schedulebbyrecipient";


export class ScheduleBByRecipientPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.ScheduleBByRecipient })
  results?: ScheduleBByRecipient[];
}
