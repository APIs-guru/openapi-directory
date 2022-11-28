import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisionalConfiguration
/** 
 * Details about a provisional configuration.
**/
export class ProvisionalConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxTimeToLiveInMinutes" })
  maxTimeToLiveInMinutes: number;
}
