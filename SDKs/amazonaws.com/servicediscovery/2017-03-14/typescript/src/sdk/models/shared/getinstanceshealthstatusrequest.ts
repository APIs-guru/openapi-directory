import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesHealthStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Instances" })
  instances?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceId" })
  serviceId: string;
}
