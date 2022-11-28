import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo } from "./googlecloudbeyondcorpappconnectorsv1alphaappconnectorprincipalinfo";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1alpharesourceinfo";
export declare enum GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum {
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
export declare class GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    principalInfo?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo;
    resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo;
    state?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum;
    uid?: string;
    updateTime?: string;
}
/**
 * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
**/
export declare class GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput extends SpeakeasyBase {
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    principalInfo?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo;
    resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo;
}
