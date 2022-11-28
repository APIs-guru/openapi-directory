import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeStatusEnum } from "./policytypestatusenum";
import { PolicyTypeEnum } from "./policytypeenum";
/**
 * Contains information about a policy type and its status in the associated root.
**/
export declare class PolicyTypeSummary extends SpeakeasyBase {
    status?: PolicyTypeStatusEnum;
    type?: PolicyTypeEnum;
}
