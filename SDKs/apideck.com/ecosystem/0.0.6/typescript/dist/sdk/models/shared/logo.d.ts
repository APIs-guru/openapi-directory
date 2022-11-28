import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LogoTypeEnum {
    Logo = "LOGO",
    Banner = "BANNER",
    Screenshot = "SCREENSHOT"
}
export declare class Logo extends SpeakeasyBase {
    contentType?: string;
    id?: string;
    type?: LogoTypeEnum;
    url: string;
}
