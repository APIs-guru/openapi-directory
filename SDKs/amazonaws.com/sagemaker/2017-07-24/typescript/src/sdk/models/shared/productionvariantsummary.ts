import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeployedImage } from "./deployedimage";



// ProductionVariantSummary
/** 
 * Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values. 
**/
export class ProductionVariantSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentInstanceCount" })
  currentInstanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentWeight" })
  currentWeight?: number;

  @SpeakeasyMetadata({ data: "json, name=DeployedImages", elemType: DeployedImage })
  deployedImages?: DeployedImage[];

  @SpeakeasyMetadata({ data: "json, name=DesiredInstanceCount" })
  desiredInstanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=DesiredWeight" })
  desiredWeight?: number;

  @SpeakeasyMetadata({ data: "json, name=VariantName" })
  variantName: string;
}
