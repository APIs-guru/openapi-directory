import { SpeakeasyBase } from "../../../internal/utils";
import { FindingsFilterActionEnum } from "./findingsfilteractionenum";
/**
 * Provides information about a findings filter.
**/
export declare class FindingsFilterListItem extends SpeakeasyBase {
    action?: FindingsFilterActionEnum;
    arn?: string;
    id?: string;
    name?: string;
    tags?: Map<string, string>;
}
