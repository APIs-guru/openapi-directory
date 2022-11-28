import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServerEvent
/** 
 * An event that is related to the server, such as the start of maintenance or backup. 
**/
export class ServerEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=LogUrl" })
  logUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;
}
