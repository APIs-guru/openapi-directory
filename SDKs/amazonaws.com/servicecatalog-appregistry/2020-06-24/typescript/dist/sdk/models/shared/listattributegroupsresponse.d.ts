import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeGroupSummary } from "./attributegroupsummary";
export declare class ListAttributeGroupsResponse extends SpeakeasyBase {
    attributeGroups?: AttributeGroupSummary[];
    nextToken?: string;
}
