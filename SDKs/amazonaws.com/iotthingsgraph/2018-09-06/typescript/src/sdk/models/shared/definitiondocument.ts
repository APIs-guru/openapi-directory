import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefinitionLanguageEnum } from "./definitionlanguageenum";



// DefinitionDocument
/** 
 * A document that defines an entity. 
**/
export class DefinitionDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language: DefinitionLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
