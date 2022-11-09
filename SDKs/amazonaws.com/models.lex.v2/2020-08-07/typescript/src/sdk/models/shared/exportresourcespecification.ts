import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotExportSpecification } from "./botexportspecification";
import { BotLocaleExportSpecification } from "./botlocaleexportspecification";


// ExportResourceSpecification
/** 
 * Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
**/
export class ExportResourceSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=botExportSpecification" })
  botExportSpecification?: BotExportSpecification;

  @Metadata({ data: "json, name=botLocaleExportSpecification" })
  botLocaleExportSpecification?: BotLocaleExportSpecification;
}
