import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AspectValueDistribution } from "./aspectvaluedistribution";



// AspectDistribution
/** 
 * This type contains information about one category aspect that is associated with a specified category.
**/
export class AspectDistribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspectValueDistributions", elemType: AspectValueDistribution })
  aspectValueDistributions?: AspectValueDistribution[];

  @SpeakeasyMetadata({ data: "json, name=localizedAspectName" })
  localizedAspectName?: string;
}
