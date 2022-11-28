import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Phone
/** 
 * Phone
**/
export class Phone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=countryName" })
  countryName: string;
}
