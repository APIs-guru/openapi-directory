import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Language } from "./language";


// LanguageList
/** 
 * Languages List
**/
export class LanguageList extends SpeakeasyBase {
  @Metadata({ data: "json, name=languages", elemType: shared.Language })
  languages: Language[];

  @Metadata({ data: "json, name=sum" })
  sum: number;
}
