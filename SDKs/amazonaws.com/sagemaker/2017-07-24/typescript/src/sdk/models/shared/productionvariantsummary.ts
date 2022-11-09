import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeployedImage } from "./deployedimage";


// ProductionVariantSummary
/** 
 * Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values. 
**/
export class ProductionVariantSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentInstanceCount" })
  currentInstanceCount?: number;

  @Metadata({ data: "json, name=CurrentWeight" })
  currentWeight?: number;

  @Metadata({ data: "json, name=DeployedImages", elemType: shared.DeployedImage })
  deployedImages?: DeployedImage[];

  @Metadata({ data: "json, name=DesiredInstanceCount" })
  desiredInstanceCount?: number;

  @Metadata({ data: "json, name=DesiredWeight" })
  desiredWeight?: number;

  @Metadata({ data: "json, name=VariantName" })
  variantName: string;
}
