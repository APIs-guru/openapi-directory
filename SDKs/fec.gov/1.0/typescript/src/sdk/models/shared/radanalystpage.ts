import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { RadAnalyst } from "./radanalyst";


export class RadAnalystPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.RadAnalyst })
  results?: RadAnalyst[];
}
