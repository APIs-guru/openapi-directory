import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WkHtmlToPdfAdvancedOptions } from "./wkhtmltopdfadvancedoptions";


export class WkHtmlToPdfHtmlToPdfRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=html" })
  html: string;

  @Metadata({ data: "json, name=inlinePdf" })
  inlinePdf?: boolean;

  @Metadata({ data: "json, name=options" })
  options?: WkHtmlToPdfAdvancedOptions;
}
