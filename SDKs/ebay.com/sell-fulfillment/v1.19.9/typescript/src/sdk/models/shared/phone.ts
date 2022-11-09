import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Phone
/** 
 * This type is used by the returnAddress
**/
export class Phone extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;
}
