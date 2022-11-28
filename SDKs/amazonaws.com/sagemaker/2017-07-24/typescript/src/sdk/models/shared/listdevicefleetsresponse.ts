import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceFleetSummary } from "./devicefleetsummary";



export class ListDeviceFleetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceFleetSummaries", elemType: DeviceFleetSummary })
  deviceFleetSummaries: DeviceFleetSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
