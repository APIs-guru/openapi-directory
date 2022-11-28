import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cursors to navigate to previous or next pages through the API
**/
export declare class MetaCursors extends SpeakeasyBase {
    current?: string;
    next?: string;
    previous?: string;
}
/**
 * Response metadata
**/
export declare class Meta extends SpeakeasyBase {
    cursors?: MetaCursors;
    itemsOnPage?: number;
}
