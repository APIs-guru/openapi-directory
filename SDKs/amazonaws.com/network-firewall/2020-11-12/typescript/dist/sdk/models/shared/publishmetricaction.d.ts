import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
/**
 * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
**/
export declare class PublishMetricAction extends SpeakeasyBase {
    dimensions: Dimension[];
}
