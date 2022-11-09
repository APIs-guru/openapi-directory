import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisionalConfiguration
/** 
 * Details about a provisional configuration.
**/
export class ProvisionalConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxTimeToLiveInMinutes" })
  maxTimeToLiveInMinutes: number;
}
