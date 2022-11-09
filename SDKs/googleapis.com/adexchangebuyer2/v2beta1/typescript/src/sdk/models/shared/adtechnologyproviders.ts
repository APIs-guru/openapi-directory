import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdTechnologyProviders
/** 
 * Detected ad technology provider information.
**/
export class AdTechnologyProviders extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedProviderIds" })
  detectedProviderIds?: string[];

  @Metadata({ data: "json, name=hasUnidentifiedProvider" })
  hasUnidentifiedProvider?: boolean;
}
