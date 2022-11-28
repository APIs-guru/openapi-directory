import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ManagedConfigurationTemplate
/** 
 * The managed configurations template for the app, saved from the managed configurations iframe.
**/
export class ManagedConfigurationTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationVariables" })
  configurationVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=templateId" })
  templateId?: string;
}
