import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AppPkgInfoModificationsOperationStateEnum {
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}


// AppPkgInfoModifications
/** 
 * 'The data type represents the operational state for an application package resource'
**/
export class AppPkgInfoModifications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operationState" })
  operationState: AppPkgInfoModificationsOperationStateEnum;
}
