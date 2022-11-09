import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserDetails
/** 
 * Specifies the user name, server ID, and session ID for a workflow.
**/
export class UserDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServerId" })
  serverId: string;

  @Metadata({ data: "json, name=SessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
