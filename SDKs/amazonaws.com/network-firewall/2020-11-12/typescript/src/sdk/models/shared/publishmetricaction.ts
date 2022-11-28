import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";



// PublishMetricAction
/** 
 * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
**/
export class PublishMetricAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions", elemType: Dimension })
  dimensions: Dimension[];
}
