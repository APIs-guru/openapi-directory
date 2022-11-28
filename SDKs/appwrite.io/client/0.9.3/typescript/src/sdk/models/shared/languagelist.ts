import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Language } from "./language";



// LanguageList
/** 
 * Languages List
**/
export class LanguageList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languages", elemType: Language })
  languages: Language[];

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}
