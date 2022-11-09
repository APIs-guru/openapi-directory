import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AspectRecommendations } from "./aspectrecommendations";
import { ProductRecommendation } from "./productrecommendation";
/**
 * This type is used by the correctiveRecommendations container, which is returned if eBay has suggestions for how to correct the given violation.
**/
export declare class CorrectiveRecommendations extends SpeakeasyBase {
    aspectRecommendations?: AspectRecommendations[];
    productRecommendation?: ProductRecommendation;
}
