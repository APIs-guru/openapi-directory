import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The counter that describes a DDoS attack.
**/
export declare class SummarizedCounter extends SpeakeasyBase {
    average?: number;
    max?: number;
    n?: number;
    name?: string;
    sum?: number;
    unit?: string;
}
