import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAssociatedAttributeGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeGroups" })
  attributeGroups?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
