import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationEndpoint } from "./applicationendpoint";
import { GatewayInput } from "./gateway";
import { Gateway } from "./gateway";
export declare enum ConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Down = "DOWN"
}
export declare enum ConnectionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TcpProxy = "TCP_PROXY"
}
/**
 * A BeyondCorp Connection resource represents a BeyondCorp protected connection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected connection. Multiple connectors can be authorised for a single Connection.
**/
export declare class ConnectionInput extends SpeakeasyBase {
    applicationEndpoint?: ApplicationEndpoint;
    connectors?: string[];
    displayName?: string;
    gateway?: GatewayInput;
    labels?: Map<string, string>;
    name?: string;
    type?: ConnectionTypeEnum;
}
/**
 * A BeyondCorp Connection resource represents a BeyondCorp protected connection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected connection. Multiple connectors can be authorised for a single Connection.
**/
export declare class Connection extends SpeakeasyBase {
    applicationEndpoint?: ApplicationEndpoint;
    connectors?: string[];
    createTime?: string;
    displayName?: string;
    gateway?: Gateway;
    labels?: Map<string, string>;
    name?: string;
    state?: ConnectionStateEnum;
    type?: ConnectionTypeEnum;
    uid?: string;
    updateTime?: string;
}
