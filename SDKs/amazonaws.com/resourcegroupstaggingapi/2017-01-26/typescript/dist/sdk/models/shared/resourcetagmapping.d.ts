import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceDetails } from "./compliancedetails";
import { Tag } from "./tag";
/**
 * A list of resource ARNs and the tags (keys and values) that are associated with each.
**/
export declare class ResourceTagMapping extends SpeakeasyBase {
    complianceDetails?: ComplianceDetails;
    resourceArn?: string;
    tags?: Tag[];
}
