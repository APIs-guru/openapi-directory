import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ButtonActionEnum } from "./buttonactionenum";


// DefaultButtonConfiguration
/** 
 * Default button configuration.
**/
export class DefaultButtonConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackgroundColor" })
  backgroundColor?: string;

  @Metadata({ data: "json, name=BorderRadius" })
  borderRadius?: number;

  @Metadata({ data: "json, name=ButtonAction" })
  buttonAction: ButtonActionEnum;

  @Metadata({ data: "json, name=Link" })
  link?: string;

  @Metadata({ data: "json, name=Text" })
  text: string;

  @Metadata({ data: "json, name=TextColor" })
  textColor?: string;
}
