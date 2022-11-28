import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreativeDealIdsDealStatuses extends SpeakeasyBase {
    arcStatus?: string;
    dealId?: string;
    webPropertyId?: number;
}
/**
 * The external deal ids associated with a creative.
**/
export declare class CreativeDealIds extends SpeakeasyBase {
    dealStatuses?: CreativeDealIdsDealStatuses[];
    kind?: string;
}
