import { SpeakeasyBase } from "../../../internal/utils";
import { LinkWithType } from "./linkwithtype";
export declare class FeedLinks extends SpeakeasyBase {
    currentUser?: LinkWithType;
    currentUserActor?: LinkWithType;
    currentUserOrganization?: LinkWithType;
    currentUserOrganizations?: LinkWithType[];
    currentUserPublic?: LinkWithType;
    securityAdvisories?: LinkWithType;
    timeline: LinkWithType;
    user: LinkWithType;
}
/**
 * Feed
**/
export declare class Feed extends SpeakeasyBase {
    links: FeedLinks;
    currentUserActorUrl?: string;
    currentUserOrganizationUrl?: string;
    currentUserOrganizationUrls?: string[];
    currentUserPublicUrl?: string;
    currentUserUrl?: string;
    securityAdvisoriesUrl?: string;
    timelineUrl: string;
    userUrl: string;
}
