import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceSummary } from "./devicesummary";


export class ListDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceSummaries", elemType: shared.DeviceSummary })
  deviceSummaries: DeviceSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
