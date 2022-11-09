import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionLanguageEnum } from "./definitionlanguageenum";


// DefinitionDocument
/** 
 * A document that defines an entity. 
**/
export class DefinitionDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language: DefinitionLanguageEnum;

  @Metadata({ data: "json, name=text" })
  text: string;
}
