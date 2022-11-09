import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotImportSpecification } from "./botimportspecification";
import { BotLocaleImportSpecification } from "./botlocaleimportspecification";


// ImportResourceSpecification
/** 
 * Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
**/
export class ImportResourceSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=botImportSpecification" })
  botImportSpecification?: BotImportSpecification;

  @Metadata({ data: "json, name=botLocaleImportSpecification" })
  botLocaleImportSpecification?: BotLocaleImportSpecification;
}
