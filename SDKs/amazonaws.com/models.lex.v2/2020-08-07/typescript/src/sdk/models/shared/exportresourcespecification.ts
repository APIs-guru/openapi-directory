import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotExportSpecification } from "./botexportspecification";
import { BotLocaleExportSpecification } from "./botlocaleexportspecification";



// ExportResourceSpecification
/** 
 * Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
**/
export class ExportResourceSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botExportSpecification" })
  botExportSpecification?: BotExportSpecification;

  @SpeakeasyMetadata({ data: "json, name=botLocaleExportSpecification" })
  botLocaleExportSpecification?: BotLocaleExportSpecification;
}
