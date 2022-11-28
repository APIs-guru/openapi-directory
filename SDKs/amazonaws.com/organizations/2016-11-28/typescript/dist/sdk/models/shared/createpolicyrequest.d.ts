import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { PolicyTypeEnum } from "./policytypeenum";
export declare class CreatePolicyRequest extends SpeakeasyBase {
    content: string;
    description: string;
    name: string;
    tags?: Tag[];
    type: PolicyTypeEnum;
}
