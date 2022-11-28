import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalInfo } from "./principalinfo";
import { ResourceInfo } from "./resourceinfo";
export declare enum ConnectorStateEnum {
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
export declare class Connector extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    principalInfo?: PrincipalInfo;
    resourceInfo?: ResourceInfo;
    state?: ConnectorStateEnum;
    uid?: string;
    updateTime?: string;
}
/**
 * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
**/
export declare class ConnectorInput extends SpeakeasyBase {
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    principalInfo?: PrincipalInfo;
    resourceInfo?: ResourceInfo;
}
