import { SpeakeasyBase } from "../../../internal/utils";
import { Building } from "./building";
/**
 * Public API: Resources.buildings
**/
export declare class Buildings extends SpeakeasyBase {
    buildings?: Building[];
    etag?: string;
    kind?: string;
    nextPageToken?: string;
}
