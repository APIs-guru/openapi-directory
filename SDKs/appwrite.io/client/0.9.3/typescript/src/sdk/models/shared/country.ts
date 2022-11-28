import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Country
/** 
 * Country
**/
export class Country extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
