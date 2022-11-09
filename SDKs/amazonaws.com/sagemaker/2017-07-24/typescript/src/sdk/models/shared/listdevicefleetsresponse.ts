import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceFleetSummary } from "./devicefleetsummary";


export class ListDeviceFleetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceFleetSummaries", elemType: shared.DeviceFleetSummary })
  deviceFleetSummaries: DeviceFleetSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
