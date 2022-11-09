import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WkHtmlToPdfAdvancedOptions } from "./wkhtmltopdfadvancedoptions";


export class WkHtmlToPdfUrlToPdfRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=inlinePdf" })
  inlinePdf?: boolean;

  @Metadata({ data: "json, name=options" })
  options?: WkHtmlToPdfAdvancedOptions;

  @Metadata({ data: "json, name=url" })
  url: string;
}
