import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListOrganizationalUnitsForParentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ParentId" })
  parentId: string;
}
