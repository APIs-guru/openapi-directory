import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OverrideButtonConfiguration } from "./overridebuttonconfiguration";
import { DefaultButtonConfiguration } from "./defaultbuttonconfiguration";
import { OverrideButtonConfiguration } from "./overridebuttonconfiguration";
import { OverrideButtonConfiguration } from "./overridebuttonconfiguration";


// InAppMessageButton
/** 
 * Button Config for an in-app message.
**/
export class InAppMessageButton extends SpeakeasyBase {
  @Metadata({ data: "json, name=Android" })
  android?: OverrideButtonConfiguration;

  @Metadata({ data: "json, name=DefaultConfig" })
  defaultConfig?: DefaultButtonConfiguration;

  @Metadata({ data: "json, name=IOS" })
  ios?: OverrideButtonConfiguration;

  @Metadata({ data: "json, name=Web" })
  web?: OverrideButtonConfiguration;
}
