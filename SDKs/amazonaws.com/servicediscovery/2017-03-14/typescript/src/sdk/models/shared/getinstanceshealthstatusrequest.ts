import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesHealthStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Instances" })
  instances?: string[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServiceId" })
  serviceId: string;
}
