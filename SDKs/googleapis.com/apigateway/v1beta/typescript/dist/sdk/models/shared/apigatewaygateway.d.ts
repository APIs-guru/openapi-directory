import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApigatewayGatewayStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
**/
export declare class ApigatewayGateway extends SpeakeasyBase {
    apiConfig?: string;
    createTime?: string;
    defaultHostname?: string;
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    state?: ApigatewayGatewayStateEnum;
    updateTime?: string;
}
/**
 * A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
**/
export declare class ApigatewayGatewayInput extends SpeakeasyBase {
    apiConfig?: string;
    displayName?: string;
    labels?: Map<string, string>;
}
