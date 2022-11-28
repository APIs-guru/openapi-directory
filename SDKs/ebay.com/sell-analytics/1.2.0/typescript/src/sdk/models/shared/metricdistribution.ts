import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";



// MetricDistribution
/** 
 * This complex data type describes the metric distribution by basis.
**/
export class MetricDistribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basis" })
  basis?: string;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: Distribution })
  data?: Distribution[];
}
