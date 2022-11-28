import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OverrideButtonConfiguration } from "./overridebuttonconfiguration";
import { DefaultButtonConfiguration } from "./defaultbuttonconfiguration";



// InAppMessageButton
/** 
 * Button Config for an in-app message.
**/
export class InAppMessageButton extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Android" })
  android?: OverrideButtonConfiguration;

  @SpeakeasyMetadata({ data: "json, name=DefaultConfig" })
  defaultConfig?: DefaultButtonConfiguration;

  @SpeakeasyMetadata({ data: "json, name=IOS" })
  ios?: OverrideButtonConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Web" })
  web?: OverrideButtonConfiguration;
}
