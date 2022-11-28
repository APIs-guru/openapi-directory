import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";
export declare class DisablePolicyTypeRequest extends SpeakeasyBase {
    policyType: PolicyTypeEnum;
    rootId: string;
}
