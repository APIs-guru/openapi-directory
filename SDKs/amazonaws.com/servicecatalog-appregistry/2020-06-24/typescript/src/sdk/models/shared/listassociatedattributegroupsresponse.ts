import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAssociatedAttributeGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeGroups" })
  attributeGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
