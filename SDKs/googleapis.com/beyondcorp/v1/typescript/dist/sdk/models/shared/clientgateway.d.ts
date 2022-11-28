import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ClientGatewayStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Running = "RUNNING",
    Down = "DOWN",
    Error = "ERROR"
}
/**
 * Message describing ClientGateway object.
**/
export declare class ClientGateway extends SpeakeasyBase {
    clientConnectorService?: string;
    createTime?: string;
    id?: string;
    name?: string;
    state?: ClientGatewayStateEnum;
    updateTime?: string;
}
/**
 * Message describing ClientGateway object.
**/
export declare class ClientGatewayInput extends SpeakeasyBase {
    name?: string;
}
