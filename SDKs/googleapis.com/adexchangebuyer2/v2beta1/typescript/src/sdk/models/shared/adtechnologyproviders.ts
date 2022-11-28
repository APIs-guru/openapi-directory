import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdTechnologyProviders
/** 
 * Detected ad technology provider information.
**/
export class AdTechnologyProviders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedProviderIds" })
  detectedProviderIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=hasUnidentifiedProvider" })
  hasUnidentifiedProvider?: boolean;
}
