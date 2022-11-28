import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AspectRecommendations } from "./aspectrecommendations";
import { ProductRecommendation } from "./productrecommendation";



// CorrectiveRecommendations
/** 
 * This type is used by the correctiveRecommendations container, which is returned if eBay has suggestions for how to correct the given violation.
**/
export class CorrectiveRecommendations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspectRecommendations", elemType: AspectRecommendations })
  aspectRecommendations?: AspectRecommendations[];

  @SpeakeasyMetadata({ data: "json, name=productRecommendation" })
  productRecommendation?: ProductRecommendation;
}
