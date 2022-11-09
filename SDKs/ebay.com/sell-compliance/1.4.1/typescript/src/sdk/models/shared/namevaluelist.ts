import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NameValueList
/** 
 * This type is used to provide a name-value pair, including the identifying aspects of a product variation through the variationAspects container.
**/
export class NameValueList extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
