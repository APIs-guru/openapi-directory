import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListResourcesInProtectionGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProtectionGroupId" })
  protectionGroupId: string;
}
