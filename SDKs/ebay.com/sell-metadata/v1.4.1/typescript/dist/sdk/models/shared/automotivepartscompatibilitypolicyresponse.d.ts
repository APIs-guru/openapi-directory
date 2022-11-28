import { SpeakeasyBase } from "../../../internal/utils";
import { AutomotivePartsCompatibilityPolicy } from "./automotivepartscompatibilitypolicy";
import { Error } from "./error";
export declare class AutomotivePartsCompatibilityPolicyResponse extends SpeakeasyBase {
    automotivePartsCompatibilityPolicies?: AutomotivePartsCompatibilityPolicy[];
    warnings?: Error[];
}
