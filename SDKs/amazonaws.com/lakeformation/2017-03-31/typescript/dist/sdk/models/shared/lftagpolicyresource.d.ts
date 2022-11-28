import { SpeakeasyBase } from "../../../internal/utils";
import { LfTag } from "./lftag";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * A structure containing a list of tag conditions that apply to a resource's tag policy.
**/
export declare class LfTagPolicyResource extends SpeakeasyBase {
    catalogId?: string;
    expression: LfTag[];
    resourceType: ResourceTypeEnum;
}
