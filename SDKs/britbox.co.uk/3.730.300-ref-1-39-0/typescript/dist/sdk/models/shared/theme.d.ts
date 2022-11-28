import { SpeakeasyBase } from "../../../internal/utils";
import { ThemeColor } from "./themecolor";
export declare enum ThemeTypeEnum {
    Background = "Background",
    Text = "Text",
    Custom = "Custom"
}
export declare class Theme extends SpeakeasyBase {
    colors: ThemeColor[];
    type: ThemeTypeEnum;
}
