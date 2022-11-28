import { SpeakeasyBase } from "../../../internal/utils";
import { UserGeneralUser } from "./usergeneraluser";
import { ContentCommentSummary } from "./contentcommentsummary";
import { ContentContentRepresentation } from "./contentcontentrepresentation";
export declare class ContentContentItemPublicContract extends SpeakeasyBase {
    allowComments?: boolean;
    author?: UserGeneralUser;
    autoEnglishPropertyFallback?: boolean;
    cType?: string;
    cmsPath?: string;
    commentSummary?: ContentCommentSummary;
    contentId?: number;
    creationDate?: Date;
    hasAgeGate?: boolean;
    minimumAge?: number;
    modifyDate?: Date;
    properties?: Map<string, Map<string, any>>;
    ratingImagePath?: string;
    representations?: ContentContentRepresentation[];
    tags?: string[];
}
