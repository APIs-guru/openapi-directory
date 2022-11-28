import { SpeakeasyBase } from "../../../internal/utils";
import { BotImportSpecification } from "./botimportspecification";
import { BotLocaleImportSpecification } from "./botlocaleimportspecification";
/**
 * Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
**/
export declare class ImportResourceSpecification extends SpeakeasyBase {
    botImportSpecification?: BotImportSpecification;
    botLocaleImportSpecification?: BotLocaleImportSpecification;
}
