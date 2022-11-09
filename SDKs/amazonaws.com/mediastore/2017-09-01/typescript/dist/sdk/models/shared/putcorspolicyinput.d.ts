import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CorsRule } from "./corsrule";
export declare class PutCorsPolicyInput extends SpeakeasyBase {
    containerName: string;
    corsPolicy: CorsRule[];
}
