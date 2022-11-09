import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceId } from "./serviceid";


// TraceUser
/** 
 * Information about a user recorded in segment documents.
**/
export class TraceUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceIds", elemType: shared.ServiceId })
  serviceIds?: ServiceId[];

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
