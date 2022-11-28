import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChromeAdvancedOptions } from "./chromeadvancedoptions";



export class ChromeHtmlToPdfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html: string;

  @SpeakeasyMetadata({ data: "json, name=inlinePdf" })
  inlinePdf?: boolean;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: ChromeAdvancedOptions;
}
