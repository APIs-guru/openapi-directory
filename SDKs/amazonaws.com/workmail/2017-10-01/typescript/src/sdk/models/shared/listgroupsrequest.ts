import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListGroupsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
