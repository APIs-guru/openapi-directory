import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ButtonActionEnum } from "./buttonactionenum";



// OverrideButtonConfiguration
/** 
 * Override button configuration.
**/
export class OverrideButtonConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ButtonAction" })
  buttonAction: ButtonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: string;
}
