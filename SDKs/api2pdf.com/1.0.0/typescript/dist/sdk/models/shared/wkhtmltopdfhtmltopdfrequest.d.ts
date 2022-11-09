import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WkHtmlToPdfAdvancedOptions } from "./wkhtmltopdfadvancedoptions";
export declare class WkHtmlToPdfHtmlToPdfRequest extends SpeakeasyBase {
    fileName?: string;
    html: string;
    inlinePdf?: boolean;
    options?: WkHtmlToPdfAdvancedOptions;
}
