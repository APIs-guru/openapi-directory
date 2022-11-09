import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ManagedConfigurationTemplate
/** 
 * The managed configurations template for the app, saved from the managed configurations iframe.
**/
export class ManagedConfigurationTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationVariables" })
  configurationVariables?: Map<string, string>;

  @Metadata({ data: "json, name=templateId" })
  templateId?: string;
}
