import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimension } from "./dimension";


// PublishMetricAction
/** 
 * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
**/
export class PublishMetricAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions", elemType: shared.Dimension })
  dimensions: Dimension[];
}
