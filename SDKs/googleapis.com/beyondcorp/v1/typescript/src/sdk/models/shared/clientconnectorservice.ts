import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Egress } from "./egress";
import { Ingress } from "./ingress";


export enum ClientConnectorServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Running = "RUNNING",
    Down = "DOWN",
    Error = "ERROR"
}


// ClientConnectorServiceInput
/** 
 * Message describing ClientConnectorService object.
**/
export class ClientConnectorServiceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=egress" })
  egress?: Egress;

  @SpeakeasyMetadata({ data: "json, name=ingress" })
  ingress?: Ingress;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// ClientConnectorService
/** 
 * Message describing ClientConnectorService object.
**/
export class ClientConnectorService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=egress" })
  egress?: Egress;

  @SpeakeasyMetadata({ data: "json, name=ingress" })
  ingress?: Ingress;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ClientConnectorServiceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
