import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Language
/** 
 * Language
**/
export class Language extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=nativeName" })
  nativeName: string;
}
