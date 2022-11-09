import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListServiceInstancesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
