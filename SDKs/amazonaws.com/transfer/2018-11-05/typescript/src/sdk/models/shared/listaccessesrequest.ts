import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAccessesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId: string;
}
