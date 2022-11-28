import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceTierConfig } from "./devicetierconfig";



// ListDeviceTierConfigsResponse
/** 
 * Response listing existing device tier configs.
**/
export class ListDeviceTierConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceTierConfigs", elemType: DeviceTierConfig })
  deviceTierConfigs?: DeviceTierConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
