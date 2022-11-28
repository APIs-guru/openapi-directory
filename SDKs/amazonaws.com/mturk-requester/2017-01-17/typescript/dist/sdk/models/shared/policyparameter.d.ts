import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterMapEntry } from "./parametermapentry";
/**
 *  Name of the parameter from the Review policy.
**/
export declare class PolicyParameter extends SpeakeasyBase {
    key?: string;
    mapEntries?: ParameterMapEntry[];
    values?: string[];
}
