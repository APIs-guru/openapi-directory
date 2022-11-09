import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ClientGatewayStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Running = "RUNNING"
,    Down = "DOWN"
,    Error = "ERROR"
}


// ClientGateway
/** 
 * Message describing ClientGateway object.
**/
export class ClientGateway extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientConnectorService" })
  clientConnectorService?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: ClientGatewayStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
