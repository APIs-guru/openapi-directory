import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint } from "./googlecloudbeyondcorpappconnectionsv1appconnectionapplicationendpoint";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput } from "./googlecloudbeyondcorpappconnectionsv1appconnectiongateway";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway } from "./googlecloudbeyondcorpappconnectionsv1appconnectiongateway";
export declare enum GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Down = "DOWN"
}
export declare enum GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TcpProxy = "TCP_PROXY"
}
/**
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
export declare class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput extends SpeakeasyBase {
    applicationEndpoint?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;
    connectors?: string[];
    displayName?: string;
    gateway?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput;
    labels?: Map<string, string>;
    name?: string;
    type?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;
}
/**
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
export declare class GoogleCloudBeyondcorpAppconnectionsV1AppConnection extends SpeakeasyBase {
    applicationEndpoint?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;
    connectors?: string[];
    createTime?: string;
    displayName?: string;
    gateway?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway;
    labels?: Map<string, string>;
    name?: string;
    state?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum;
    type?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;
    uid?: string;
    updateTime?: string;
}
