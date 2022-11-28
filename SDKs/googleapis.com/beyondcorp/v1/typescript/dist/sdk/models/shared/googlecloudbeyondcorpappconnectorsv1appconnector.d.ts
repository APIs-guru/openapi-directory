import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo } from "./googlecloudbeyondcorpappconnectorsv1appconnectorprincipalinfo";
import { GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1resourceinfo";
export declare enum GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Down = "DOWN"
}
/**
 * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
**/
export declare class GoogleCloudBeyondcorpAppconnectorsV1AppConnector extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    principalInfo?: GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo;
    resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
    state?: GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum;
    uid?: string;
    updateTime?: string;
}
/**
 * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
**/
export declare class GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput extends SpeakeasyBase {
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    principalInfo?: GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo;
    resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
}
