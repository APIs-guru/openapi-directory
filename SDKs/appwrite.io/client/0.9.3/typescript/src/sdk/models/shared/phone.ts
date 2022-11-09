import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Phone
/** 
 * Phone
**/
export class Phone extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=countryCode" })
  countryCode: string;

  @Metadata({ data: "json, name=countryName" })
  countryName: string;
}
