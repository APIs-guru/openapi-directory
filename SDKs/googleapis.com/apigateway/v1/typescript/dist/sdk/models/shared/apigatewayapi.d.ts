import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApigatewayApiStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * An API that can be served by one or more Gateways.
**/
export declare class ApigatewayApiInput extends SpeakeasyBase {
    displayName?: string;
    labels?: Map<string, string>;
    managedService?: string;
}
/**
 * An API that can be served by one or more Gateways.
**/
export declare class ApigatewayApi extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    labels?: Map<string, string>;
    managedService?: string;
    name?: string;
    state?: ApigatewayApiStateEnum;
    updateTime?: string;
}
