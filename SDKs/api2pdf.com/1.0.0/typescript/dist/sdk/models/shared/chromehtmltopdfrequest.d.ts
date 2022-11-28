import { SpeakeasyBase } from "../../../internal/utils";
import { ChromeAdvancedOptions } from "./chromeadvancedoptions";
export declare class ChromeHtmlToPdfRequest extends SpeakeasyBase {
    fileName?: string;
    html: string;
    inlinePdf?: boolean;
    options?: ChromeAdvancedOptions;
}
