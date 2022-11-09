import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Phone
/** 
 * The type that defines the fields for the details of a phone.
**/
export class Phone extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=phoneType" })
  phoneType?: string;
}
