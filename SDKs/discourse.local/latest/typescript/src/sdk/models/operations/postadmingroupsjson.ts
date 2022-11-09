import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminGroupsJsonRequestBodyGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class PostAdminGroupsJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=group" })
  group: PostAdminGroupsJsonRequestBodyGroup;
}


export class PostAdminGroupsJsonRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostAdminGroupsJsonRequestBody;
}


export class PostAdminGroupsJson200ApplicationJsonBasicGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_membership_requests" })
  allowMembershipRequests?: boolean;

  @Metadata({ data: "json, name=automatic" })
  automatic?: boolean;

  @Metadata({ data: "json, name=automatic_membership_email_domains" })
  automaticMembershipEmailDomains?: string;

  @Metadata({ data: "json, name=automatic_membership_retroactive" })
  automaticMembershipRetroactive?: boolean;

  @Metadata({ data: "json, name=bio_cooked" })
  bioCooked?: string;

  @Metadata({ data: "json, name=bio_excerpt" })
  bioExcerpt?: string;

  @Metadata({ data: "json, name=bio_raw" })
  bioRaw?: string;

  @Metadata({ data: "json, name=can_see_members" })
  canSeeMembers?: boolean;

  @Metadata({ data: "json, name=default_notification_level" })
  defaultNotificationLevel?: number;

  @Metadata({ data: "json, name=flair_bg_color" })
  flairBgColor?: string;

  @Metadata({ data: "json, name=flair_color" })
  flairColor?: string;

  @Metadata({ data: "json, name=flair_url" })
  flairUrl?: string;

  @Metadata({ data: "json, name=full_name" })
  fullName?: string;

  @Metadata({ data: "json, name=grant_trust_level" })
  grantTrustLevel?: string;

  @Metadata({ data: "json, name=has_messages" })
  hasMessages?: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=incoming_email" })
  incomingEmail?: string;

  @Metadata({ data: "json, name=membership_request_template" })
  membershipRequestTemplate?: string;

  @Metadata({ data: "json, name=membership_visibility_level" })
  membershipVisibilityLevel?: number;

  @Metadata({ data: "json, name=mentionable_level" })
  mentionableLevel?: number;

  @Metadata({ data: "json, name=messageable_level" })
  messageableLevel?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primary_group" })
  primaryGroup?: boolean;

  @Metadata({ data: "json, name=public_admission" })
  publicAdmission?: boolean;

  @Metadata({ data: "json, name=public_exit" })
  publicExit?: boolean;

  @Metadata({ data: "json, name=publish_read_state" })
  publishReadState?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=user_count" })
  userCount?: number;

  @Metadata({ data: "json, name=visibility_level" })
  visibilityLevel?: number;
}


export class PostAdminGroupsJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=basic_group" })
  basicGroup: PostAdminGroupsJson200ApplicationJsonBasicGroup;
}


export class PostAdminGroupsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdminGroupsJson200ApplicationJsonObject?: PostAdminGroupsJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
