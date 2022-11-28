import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationNodeTypeEnum } from "./organizationnodetypeenum";



// OrganizationNode
/** 
 * Information about the organization node.
**/
export class OrganizationNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: OrganizationNodeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
