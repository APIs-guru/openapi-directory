import { SpeakeasyBase } from "../../../internal/utils";
import { DeployedImage } from "./deployedimage";
/**
 * Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values.
**/
export declare class ProductionVariantSummary extends SpeakeasyBase {
    currentInstanceCount?: number;
    currentWeight?: number;
    deployedImages?: DeployedImage[];
    desiredInstanceCount?: number;
    desiredWeight?: number;
    variantName: string;
}
