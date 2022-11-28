import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AppPkgInfoModificationsOperationStateEnum {
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * 'The data type represents the operational state for an application package resource'
**/
export declare class AppPkgInfoModifications extends SpeakeasyBase {
    operationState: AppPkgInfoModificationsOperationStateEnum;
}
