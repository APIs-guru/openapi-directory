import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ButtonActionEnum } from "./buttonactionenum";


// OverrideButtonConfiguration
/** 
 * Override button configuration.
**/
export class OverrideButtonConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ButtonAction" })
  buttonAction: ButtonActionEnum;

  @Metadata({ data: "json, name=Link" })
  link?: string;
}
