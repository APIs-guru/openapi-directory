import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ClientGatewayStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Running = "RUNNING",
    Down = "DOWN",
    Error = "ERROR"
}


// ClientGateway
/** 
 * Message describing ClientGateway object.
**/
export class ClientGateway extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientConnectorService" })
  clientConnectorService?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ClientGatewayStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ClientGatewayInput
/** 
 * Message describing ClientGateway object.
**/
export class ClientGatewayInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
