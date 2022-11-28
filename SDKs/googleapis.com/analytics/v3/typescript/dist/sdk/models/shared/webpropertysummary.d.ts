import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileSummary } from "./profilesummary";
/**
 * JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.
**/
export declare class WebPropertySummary extends SpeakeasyBase {
    id?: string;
    internalWebPropertyId?: string;
    kind?: string;
    level?: string;
    name?: string;
    profiles?: ProfileSummary[];
    starred?: boolean;
    websiteUrl?: string;
}
