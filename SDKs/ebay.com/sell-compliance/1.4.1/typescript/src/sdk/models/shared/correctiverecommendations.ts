import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AspectRecommendations } from "./aspectrecommendations";
import { ProductRecommendation } from "./productrecommendation";


// CorrectiveRecommendations
/** 
 * This type is used by the correctiveRecommendations container, which is returned if eBay has suggestions for how to correct the given violation.
**/
export class CorrectiveRecommendations extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspectRecommendations", elemType: shared.AspectRecommendations })
  aspectRecommendations?: AspectRecommendations[];

  @Metadata({ data: "json, name=productRecommendation" })
  productRecommendation?: ProductRecommendation;
}
