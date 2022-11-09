import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NameValueList } from "./namevaluelist";
/**
 * This type is used to identify the product variation that has the listing violation.
**/
export declare class VariationDetails extends SpeakeasyBase {
    sku?: string;
    variationAspects?: NameValueList[];
}
