import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnectionapplicationendpoint";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnectiongateway";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnectiongateway";
export declare enum GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Down = "DOWN"
}
export declare enum GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TcpProxy = "TCP_PROXY"
}
/**
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
export declare class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection extends SpeakeasyBase {
    applicationEndpoint?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint;
    connectors?: string[];
    createTime?: string;
    displayName?: string;
    gateway?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway;
    labels?: Map<string, string>;
    name?: string;
    state?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum;
    type?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum;
    uid?: string;
    updateTime?: string;
}
/**
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
export declare class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput extends SpeakeasyBase {
    applicationEndpoint?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint;
    connectors?: string[];
    displayName?: string;
    gateway?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput;
    labels?: Map<string, string>;
    name?: string;
    type?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum;
}
