import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeGroupSummary } from "./attributegroupsummary";


export class ListAttributeGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeGroups", elemType: shared.AttributeGroupSummary })
  attributeGroups?: AttributeGroupSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
