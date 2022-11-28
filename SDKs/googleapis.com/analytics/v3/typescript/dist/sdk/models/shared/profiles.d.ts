import { SpeakeasyBase } from "../../../internal/utils";
import { Profile } from "./profile";
/**
 * A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile).
**/
export declare class Profiles extends SpeakeasyBase {
    items?: Profile[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
