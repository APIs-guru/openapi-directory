import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WkHtmlToPdfAdvancedOptions } from "./wkhtmltopdfadvancedoptions";



export class WkHtmlToPdfUrlToPdfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=inlinePdf" })
  inlinePdf?: boolean;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: WkHtmlToPdfAdvancedOptions;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
