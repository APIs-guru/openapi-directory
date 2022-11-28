import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Phone
/** 
 * The type that defines the fields for the details of a phone.
**/
export class Phone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneType" })
  phoneType?: string;
}
