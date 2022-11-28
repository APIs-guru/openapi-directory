import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevicePosition } from "./deviceposition";



export class GetDevicePositionHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DevicePositions", elemType: DevicePosition })
  devicePositions: DevicePosition[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
