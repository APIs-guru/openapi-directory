import { SpeakeasyBase } from "../../../internal/utils";
import { AllocatedConnection } from "./allocatedconnection";
export declare enum AppGatewayHostTypeEnum {
    HostTypeUnspecified = "HOST_TYPE_UNSPECIFIED",
    GcpRegionalMig = "GCP_REGIONAL_MIG"
}
export declare enum AppGatewayStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Down = "DOWN"
}
export declare enum AppGatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TcpProxy = "TCP_PROXY"
}
/**
 * A BeyondCorp AppGateway resource represents a BeyondCorp protected AppGateway to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppGateway. Multiple connectors can be authorised for a single AppGateway.
**/
export declare class AppGatewayInput extends SpeakeasyBase {
    displayName?: string;
    hostType?: AppGatewayHostTypeEnum;
    labels?: Map<string, string>;
    name?: string;
    type?: AppGatewayTypeEnum;
}
/**
 * A BeyondCorp AppGateway resource represents a BeyondCorp protected AppGateway to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppGateway. Multiple connectors can be authorised for a single AppGateway.
**/
export declare class AppGateway extends SpeakeasyBase {
    allocatedConnections?: AllocatedConnection[];
    createTime?: string;
    displayName?: string;
    hostType?: AppGatewayHostTypeEnum;
    labels?: Map<string, string>;
    name?: string;
    state?: AppGatewayStateEnum;
    type?: AppGatewayTypeEnum;
    uid?: string;
    updateTime?: string;
    uri?: string;
}
