import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListS3ResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=memberAccountId" })
  memberAccountId?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
