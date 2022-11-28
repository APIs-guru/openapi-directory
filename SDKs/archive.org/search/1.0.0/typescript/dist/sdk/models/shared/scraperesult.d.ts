import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of a scrape request
**/
export declare class ScrapeResult extends SpeakeasyBase {
    count?: number;
    cursor?: string;
    items?: Map<string, any>[];
    previous?: string;
    total?: number;
}
