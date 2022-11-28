import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameValueList } from "./namevaluelist";



// VariationDetails
/** 
 * This type is used to identify the product variation that has the listing violation.
**/
export class VariationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=variationAspects", elemType: NameValueList })
  variationAspects?: NameValueList[];
}
