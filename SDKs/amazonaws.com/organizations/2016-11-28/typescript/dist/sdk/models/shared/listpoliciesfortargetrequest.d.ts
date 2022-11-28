import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";
export declare class ListPoliciesForTargetRequest extends SpeakeasyBase {
    filter: PolicyTypeEnum;
    maxResults?: number;
    nextToken?: string;
    targetId: string;
}
