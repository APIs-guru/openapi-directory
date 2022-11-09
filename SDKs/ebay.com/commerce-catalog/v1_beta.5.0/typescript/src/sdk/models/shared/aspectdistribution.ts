import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AspectValueDistribution } from "./aspectvaluedistribution";


// AspectDistribution
/** 
 * This type contains information about one category aspect that is associated with a specified category.
**/
export class AspectDistribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspectValueDistributions", elemType: shared.AspectValueDistribution })
  aspectValueDistributions?: AspectValueDistribution[];

  @Metadata({ data: "json, name=localizedAspectName" })
  localizedAspectName?: string;
}
