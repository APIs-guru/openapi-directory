import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Distribution } from "./distribution";


// MetricDistribution
/** 
 * This complex data type describes the metric distribution by basis.
**/
export class MetricDistribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=basis" })
  basis?: string;

  @Metadata({ data: "json, name=data", elemType: shared.Distribution })
  data?: Distribution[];
}
