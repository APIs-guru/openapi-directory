import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServerEvent
/** 
 * An event that is related to the server, such as the start of maintenance or backup. 
**/
export class ServerEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=LogUrl" })
  logUrl?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;
}
