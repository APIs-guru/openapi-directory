import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RootCauseException
/** 
 * The exception associated with a root cause.
**/
export class RootCauseException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
