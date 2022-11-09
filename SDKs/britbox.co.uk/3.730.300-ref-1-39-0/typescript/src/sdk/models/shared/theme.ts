import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ThemeColor } from "./themecolor";

export enum ThemeTypeEnum {
    Background = "Background"
,    Text = "Text"
,    Custom = "Custom"
}


export class Theme extends SpeakeasyBase {
  @Metadata({ data: "json, name=colors", elemType: shared.ThemeColor })
  colors: ThemeColor[];

  @Metadata({ data: "json, name=type" })
  type: ThemeTypeEnum;
}
