import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceId } from "./serviceid";



// TraceUser
/** 
 * Information about a user recorded in segment documents.
**/
export class TraceUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceIds", elemType: ServiceId })
  serviceIds?: ServiceId[];

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}
