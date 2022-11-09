import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SdsServerTime
/** 
 * DRACOON server time
**/
export class SdsServerTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=time" })
  time?: Date;
}
