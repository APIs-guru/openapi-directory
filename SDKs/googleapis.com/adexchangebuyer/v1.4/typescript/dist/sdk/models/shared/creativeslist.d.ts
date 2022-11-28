import { SpeakeasyBase } from "../../../internal/utils";
import { Creative } from "./creative";
/**
 * The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.
**/
export declare class CreativesList extends SpeakeasyBase {
    items?: Creative[];
    kind?: string;
    nextPageToken?: string;
}
