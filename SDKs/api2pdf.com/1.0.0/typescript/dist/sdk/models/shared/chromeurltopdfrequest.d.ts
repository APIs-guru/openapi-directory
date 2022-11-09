import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ChromeAdvancedOptions } from "./chromeadvancedoptions";
export declare class ChromeUrlToPdfRequest extends SpeakeasyBase {
    fileName?: string;
    inlinePdf?: boolean;
    options?: ChromeAdvancedOptions;
    url: string;
}
