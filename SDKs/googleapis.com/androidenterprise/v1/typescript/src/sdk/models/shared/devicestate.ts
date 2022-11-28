import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeviceStateAccountStateEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


// DeviceState
/** 
 * The state of a user's device, as accessed by the getState and setState methods on device resources.
**/
export class DeviceState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountState" })
  accountState?: DeviceStateAccountStateEnum;
}
