import { SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";
/**
 * This type defines the fields that paginate the campaigns returned by the request. The entire result set consists of 0 or more sequenced response pages, where each page consists of 0 or more items from the complete result set.
**/
export declare class CampaignPagedCollection extends SpeakeasyBase {
    campaigns?: Campaign[];
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    total?: number;
}
