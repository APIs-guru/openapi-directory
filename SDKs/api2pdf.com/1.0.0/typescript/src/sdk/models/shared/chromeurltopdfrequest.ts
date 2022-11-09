import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChromeAdvancedOptions } from "./chromeadvancedoptions";


export class ChromeUrlToPdfRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=inlinePdf" })
  inlinePdf?: boolean;

  @Metadata({ data: "json, name=options" })
  options?: ChromeAdvancedOptions;

  @Metadata({ data: "json, name=url" })
  url: string;
}
