import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceDetails } from "./compliancedetails";
import { Tag } from "./tag";


// ResourceTagMapping
/** 
 * A list of resource ARNs and the tags (keys and values) that are associated with each.
**/
export class ResourceTagMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceDetails" })
  complianceDetails?: ComplianceDetails;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
