import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdminGroupsJsonRequestBodyGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class PostAdminGroupsJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group" })
  group: PostAdminGroupsJsonRequestBodyGroup;
}


export class PostAdminGroupsJson200ApplicationJsonBasicGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_membership_requests" })
  allowMembershipRequests?: boolean;

  @SpeakeasyMetadata({ data: "json, name=automatic" })
  automatic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=automatic_membership_email_domains" })
  automaticMembershipEmailDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=automatic_membership_retroactive" })
  automaticMembershipRetroactive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bio_cooked" })
  bioCooked?: string;

  @SpeakeasyMetadata({ data: "json, name=bio_excerpt" })
  bioExcerpt?: string;

  @SpeakeasyMetadata({ data: "json, name=bio_raw" })
  bioRaw?: string;

  @SpeakeasyMetadata({ data: "json, name=can_see_members" })
  canSeeMembers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=default_notification_level" })
  defaultNotificationLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=flair_bg_color" })
  flairBgColor?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_color" })
  flairColor?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_url" })
  flairUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=full_name" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=grant_trust_level" })
  grantTrustLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=has_messages" })
  hasMessages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=incoming_email" })
  incomingEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=membership_request_template" })
  membershipRequestTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=membership_visibility_level" })
  membershipVisibilityLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=mentionable_level" })
  mentionableLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=messageable_level" })
  messageableLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_group" })
  primaryGroup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=public_admission" })
  publicAdmission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=public_exit" })
  publicExit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publish_read_state" })
  publishReadState?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=user_count" })
  userCount?: number;

  @SpeakeasyMetadata({ data: "json, name=visibility_level" })
  visibilityLevel?: number;
}


export class PostAdminGroupsJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basic_group" })
  basicGroup: PostAdminGroupsJson200ApplicationJsonBasicGroup;
}


export class PostAdminGroupsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostAdminGroupsJsonRequestBody;
}


export class PostAdminGroupsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAdminGroupsJson200ApplicationJsonObject?: PostAdminGroupsJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
