import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListDevicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName?: string;

  @Metadata({ data: "json, name=LatestHeartbeatAfter" })
  latestHeartbeatAfter?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
