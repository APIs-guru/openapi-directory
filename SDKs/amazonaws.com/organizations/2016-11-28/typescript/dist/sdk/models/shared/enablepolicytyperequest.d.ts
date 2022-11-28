import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";
export declare class EnablePolicyTypeRequest extends SpeakeasyBase {
    policyType: PolicyTypeEnum;
    rootId: string;
}
