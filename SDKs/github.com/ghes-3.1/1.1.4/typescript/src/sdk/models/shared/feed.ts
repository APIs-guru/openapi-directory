import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkWithType } from "./linkwithtype";



export class FeedLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_user" })
  currentUser?: LinkWithType;

  @SpeakeasyMetadata({ data: "json, name=current_user_actor" })
  currentUserActor?: LinkWithType;

  @SpeakeasyMetadata({ data: "json, name=current_user_organization" })
  currentUserOrganization?: LinkWithType;

  @SpeakeasyMetadata({ data: "json, name=current_user_organizations", elemType: LinkWithType })
  currentUserOrganizations?: LinkWithType[];

  @SpeakeasyMetadata({ data: "json, name=current_user_public" })
  currentUserPublic?: LinkWithType;

  @SpeakeasyMetadata({ data: "json, name=security_advisories" })
  securityAdvisories?: LinkWithType;

  @SpeakeasyMetadata({ data: "json, name=timeline" })
  timeline: LinkWithType;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: LinkWithType;
}


// Feed
/** 
 * Feed
**/
export class Feed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: FeedLinks;

  @SpeakeasyMetadata({ data: "json, name=current_user_actor_url" })
  currentUserActorUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=current_user_organization_url" })
  currentUserOrganizationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=current_user_organization_urls" })
  currentUserOrganizationUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=current_user_public_url" })
  currentUserPublicUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=current_user_url" })
  currentUserUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=security_advisories_url" })
  securityAdvisoriesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=timeline_url" })
  timelineUrl: string;

  @SpeakeasyMetadata({ data: "json, name=user_url" })
  userUrl: string;
}
