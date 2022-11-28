import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Language
/** 
 * Language
**/
export class Language extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nativeName" })
  nativeName: string;
}
