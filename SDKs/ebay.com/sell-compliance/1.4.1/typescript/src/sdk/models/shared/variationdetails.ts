import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameValueList } from "./namevaluelist";


// VariationDetails
/** 
 * This type is used to identify the product variation that has the listing violation.
**/
export class VariationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=variationAspects", elemType: shared.NameValueList })
  variationAspects?: NameValueList[];
}
