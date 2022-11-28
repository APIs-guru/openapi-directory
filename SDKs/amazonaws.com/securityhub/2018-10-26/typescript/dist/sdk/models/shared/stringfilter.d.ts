import { SpeakeasyBase } from "../../../internal/utils";
import { StringFilterComparisonEnum } from "./stringfiltercomparisonenum";
/**
 * A string filter for querying findings.
**/
export declare class StringFilter extends SpeakeasyBase {
    comparison?: StringFilterComparisonEnum;
    value?: string;
}
