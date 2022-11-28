import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThemeColor } from "./themecolor";


export enum ThemeTypeEnum {
    Background = "Background",
    Text = "Text",
    Custom = "Custom"
}


export class Theme extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colors", elemType: ThemeColor })
  colors: ThemeColor[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ThemeTypeEnum;
}
