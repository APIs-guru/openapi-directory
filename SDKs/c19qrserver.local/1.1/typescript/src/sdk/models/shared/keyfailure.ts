import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyFailure
/** 
 * Key Failure
**/
export class KeyFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
