import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListPagesByContactRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactId" })
  contactId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
