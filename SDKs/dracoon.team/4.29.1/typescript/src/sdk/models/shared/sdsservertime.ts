import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SdsServerTime
/** 
 * DRACOON server time
**/
export class SdsServerTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;
}
