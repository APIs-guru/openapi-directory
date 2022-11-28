import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";



export class DevicesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device", elemType: Device })
  device?: Device[];
}
