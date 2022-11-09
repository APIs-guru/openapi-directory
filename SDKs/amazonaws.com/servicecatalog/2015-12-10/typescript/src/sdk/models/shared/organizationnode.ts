import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationNodeTypeEnum } from "./organizationnodetypeenum";


// OrganizationNode
/** 
 * Information about the organization node.
**/
export class OrganizationNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: OrganizationNodeTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
