import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NameValueList
/** 
 * This type is used to provide a name-value pair, including the identifying aspects of a product variation through the variationAspects container.
**/
export class NameValueList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
