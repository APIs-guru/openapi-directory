import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RootCauseException
/** 
 * The exception associated with a root cause.
**/
export class RootCauseException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
