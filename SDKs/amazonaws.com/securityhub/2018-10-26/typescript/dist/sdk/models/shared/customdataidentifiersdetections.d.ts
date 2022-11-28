import { SpeakeasyBase } from "../../../internal/utils";
import { Occurrences } from "./occurrences";
/**
 * The list of detected instances of sensitive data.
**/
export declare class CustomDataIdentifiersDetections extends SpeakeasyBase {
    arn?: string;
    count?: number;
    name?: string;
    occurrences?: Occurrences;
}
