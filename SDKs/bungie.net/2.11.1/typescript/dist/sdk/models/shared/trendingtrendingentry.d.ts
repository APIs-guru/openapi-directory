import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The list entry view for trending items. Returns just enough to show the item on the trending page.
**/
export declare class TrendingTrendingEntry extends SpeakeasyBase {
    creationDate?: Date;
    displayName?: string;
    endDate?: Date;
    entityType?: number;
    featureImage?: string;
    identifier?: string;
    image?: string;
    isFeatured?: boolean;
    items?: TrendingTrendingEntry[];
    link?: string;
    mp4Video?: string;
    startDate?: Date;
    tagline?: string;
    webmVideo?: string;
    weight?: number;
}
