import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LinkWithType } from "./linkwithtype";
import { LinkWithType } from "./linkwithtype";
import { LinkWithType } from "./linkwithtype";
import { LinkWithType } from "./linkwithtype";
import { LinkWithType } from "./linkwithtype";
import { LinkWithType } from "./linkwithtype";
import { LinkWithType } from "./linkwithtype";
import { LinkWithType } from "./linkwithtype";


export class FeedLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_user" })
  currentUser?: LinkWithType;

  @Metadata({ data: "json, name=current_user_actor" })
  currentUserActor?: LinkWithType;

  @Metadata({ data: "json, name=current_user_organization" })
  currentUserOrganization?: LinkWithType;

  @Metadata({ data: "json, name=current_user_organizations", elemType: shared.LinkWithType })
  currentUserOrganizations?: LinkWithType[];

  @Metadata({ data: "json, name=current_user_public" })
  currentUserPublic?: LinkWithType;

  @Metadata({ data: "json, name=security_advisories" })
  securityAdvisories?: LinkWithType;

  @Metadata({ data: "json, name=timeline" })
  timeline: LinkWithType;

  @Metadata({ data: "json, name=user" })
  user: LinkWithType;
}


// Feed
/** 
 * Feed
**/
export class Feed extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links: FeedLinks;

  @Metadata({ data: "json, name=current_user_actor_url" })
  currentUserActorUrl?: string;

  @Metadata({ data: "json, name=current_user_organization_url" })
  currentUserOrganizationUrl?: string;

  @Metadata({ data: "json, name=current_user_organization_urls" })
  currentUserOrganizationUrls?: string[];

  @Metadata({ data: "json, name=current_user_public_url" })
  currentUserPublicUrl?: string;

  @Metadata({ data: "json, name=current_user_url" })
  currentUserUrl?: string;

  @Metadata({ data: "json, name=timeline_url" })
  timelineUrl: string;

  @Metadata({ data: "json, name=user_url" })
  userUrl: string;
}
