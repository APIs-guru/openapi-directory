import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneContentItemCategory } from "./destinymilestonesdestinymilestonecontentitemcategory";
/**
 * Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint.
**/
export declare class DestinyMilestonesDestinyMilestoneContent extends SpeakeasyBase {
    about?: string;
    itemCategories?: DestinyMilestonesDestinyMilestoneContentItemCategory[];
    status?: string;
    tips?: string[];
}
