import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceSummary } from "./devicesummary";



export class ListDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceSummaries", elemType: DeviceSummary })
  deviceSummaries: DeviceSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
