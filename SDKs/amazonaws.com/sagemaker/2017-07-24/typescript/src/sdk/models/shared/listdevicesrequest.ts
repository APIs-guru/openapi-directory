import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestHeartbeatAfter" })
  latestHeartbeatAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
