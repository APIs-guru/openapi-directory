import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";
export declare class ListPoliciesRequest extends SpeakeasyBase {
    filter: PolicyTypeEnum;
    maxResults?: number;
    nextToken?: string;
}
