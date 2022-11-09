import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Egress } from "./egress";
import { Ingress } from "./ingress";

export enum ClientConnectorServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Running = "RUNNING"
,    Down = "DOWN"
,    Error = "ERROR"
}


// ClientConnectorService
/** 
 * Message describing ClientConnectorService object.
**/
export class ClientConnectorService extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=egress" })
  egress?: Egress;

  @Metadata({ data: "json, name=ingress" })
  ingress?: Ingress;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: ClientConnectorServiceStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
