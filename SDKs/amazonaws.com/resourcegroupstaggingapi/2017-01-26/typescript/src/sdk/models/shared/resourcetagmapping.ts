import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceDetails } from "./compliancedetails";
import { Tag } from "./tag";



// ResourceTagMapping
/** 
 * A list of resource ARNs and the tags (keys and values) that are associated with each.
**/
export class ResourceTagMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceDetails" })
  complianceDetails?: ComplianceDetails;

  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
