import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeActionEnum } from "./changeactionenum";
import { ResourceChangeDetail } from "./resourcechangedetail";
import { ReplacementEnum } from "./replacementenum";
import { ResourceAttributeEnum } from "./resourceattributeenum";
/**
 * Information about a resource change that will occur when a plan is executed.
**/
export declare class ResourceChange extends SpeakeasyBase {
    action?: ChangeActionEnum;
    details?: ResourceChangeDetail[];
    logicalResourceId?: string;
    physicalResourceId?: string;
    replacement?: ReplacementEnum;
    resourceType?: string;
    scope?: ResourceAttributeEnum[];
}
