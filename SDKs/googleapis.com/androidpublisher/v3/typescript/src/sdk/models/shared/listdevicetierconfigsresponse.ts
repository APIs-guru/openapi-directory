import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceTierConfig } from "./devicetierconfig";


// ListDeviceTierConfigsResponse
/** 
 * Response listing existing device tier configs.
**/
export class ListDeviceTierConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceTierConfigs", elemType: shared.DeviceTierConfig })
  deviceTierConfigs?: DeviceTierConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
