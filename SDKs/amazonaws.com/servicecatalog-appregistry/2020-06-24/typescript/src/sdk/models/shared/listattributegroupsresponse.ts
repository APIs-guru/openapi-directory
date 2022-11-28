import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeGroupSummary } from "./attributegroupsummary";



export class ListAttributeGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeGroups", elemType: AttributeGroupSummary })
  attributeGroups?: AttributeGroupSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
