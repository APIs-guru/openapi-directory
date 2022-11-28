import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Phone
/** 
 * This type is used by the returnAddress
**/
export class Phone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}
