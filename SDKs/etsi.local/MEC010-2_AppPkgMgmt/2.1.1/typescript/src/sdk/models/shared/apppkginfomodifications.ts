import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AppPkgInfoModificationsOperationStateEnum {
    Disabled = "DISABLED"
,    Enabled = "ENABLED"
}


// AppPkgInfoModifications
/** 
 * 'The data type represents the operational state for an application package resource'
**/
export class AppPkgInfoModifications extends SpeakeasyBase {
  @Metadata({ data: "json, name=operationState" })
  operationState: AppPkgInfoModificationsOperationStateEnum;
}
