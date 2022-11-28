import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ButtonActionEnum } from "./buttonactionenum";



// DefaultButtonConfiguration
/** 
 * Default button configuration.
**/
export class DefaultButtonConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackgroundColor" })
  backgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=BorderRadius" })
  borderRadius?: number;

  @SpeakeasyMetadata({ data: "json, name=ButtonAction" })
  buttonAction: ButtonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=TextColor" })
  textColor?: string;
}
