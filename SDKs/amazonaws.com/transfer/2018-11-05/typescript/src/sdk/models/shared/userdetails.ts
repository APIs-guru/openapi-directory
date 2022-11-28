import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserDetails
/** 
 * Specifies the user name, server ID, and session ID for a workflow.
**/
export class UserDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;

  @SpeakeasyMetadata({ data: "json, name=SessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
