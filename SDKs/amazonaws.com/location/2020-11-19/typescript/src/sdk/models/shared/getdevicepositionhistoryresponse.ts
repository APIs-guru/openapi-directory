import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DevicePosition } from "./deviceposition";


export class GetDevicePositionHistoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DevicePositions", elemType: shared.DevicePosition })
  devicePositions: DevicePosition[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
