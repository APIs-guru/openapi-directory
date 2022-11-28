import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyFailure
/** 
 * Key Failure
**/
export class KeyFailure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
