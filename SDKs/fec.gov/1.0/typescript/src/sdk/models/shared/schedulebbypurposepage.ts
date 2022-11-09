import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleBByPurpose } from "./schedulebbypurpose";


export class ScheduleBByPurposePage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.ScheduleBByPurpose })
  results?: ScheduleBByPurpose[];
}
