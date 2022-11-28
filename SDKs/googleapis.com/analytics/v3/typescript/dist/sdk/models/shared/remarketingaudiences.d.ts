import { SpeakeasyBase } from "../../../internal/utils";
import { RemarketingAudience } from "./remarketingaudience";
/**
 * A remarketing audience collection lists Analytics remarketing audiences to which the user has access. Each resource in the collection corresponds to a single Analytics remarketing audience.
**/
export declare class RemarketingAudiences extends SpeakeasyBase {
    items?: RemarketingAudience[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
