import { SpeakeasyBase } from "../../../internal/utils";
import { WkHtmlToPdfAdvancedOptions } from "./wkhtmltopdfadvancedoptions";
export declare class WkHtmlToPdfUrlToPdfRequest extends SpeakeasyBase {
    fileName?: string;
    inlinePdf?: boolean;
    options?: WkHtmlToPdfAdvancedOptions;
    url: string;
}
