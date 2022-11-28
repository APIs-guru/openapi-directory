import { SpeakeasyBase } from "../../../internal/utils";
import { Egress } from "./egress";
import { Ingress } from "./ingress";
export declare enum ClientConnectorServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Running = "RUNNING",
    Down = "DOWN",
    Error = "ERROR"
}
/**
 * Message describing ClientConnectorService object.
**/
export declare class ClientConnectorServiceInput extends SpeakeasyBase {
    displayName?: string;
    egress?: Egress;
    ingress?: Ingress;
    name?: string;
}
/**
 * Message describing ClientConnectorService object.
**/
export declare class ClientConnectorService extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    egress?: Egress;
    ingress?: Ingress;
    name?: string;
    state?: ClientConnectorServiceStateEnum;
    updateTime?: string;
}
