import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAdminUsersListFlagJsonFlagEnum {
    Active = "active",
    New = "new",
    Staff = "staff",
    Suspended = "suspended",
    Blocked = "blocked",
    Suspect = "suspect"
}


export class GetAdminUsersListFlagJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=flag" })
  flag: GetAdminUsersListFlagJsonFlagEnum;
}

export enum GetAdminUsersListFlagJsonAscEnum {
    True = "true"
}

export enum GetAdminUsersListFlagJsonOrderEnum {
    Created = "created",
    LastEmailed = "last_emailed",
    Seen = "seen",
    Username = "username",
    Email = "email",
    TrustLevel = "trust_level",
    DaysVisited = "days_visited",
    PostsRead = "posts_read",
    TopicsViewed = "topics_viewed",
    Posts = "posts",
    ReadTime = "read_time"
}


export class GetAdminUsersListFlagJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asc" })
  asc?: GetAdminUsersListFlagJsonAscEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetAdminUsersListFlagJsonOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_emails" })
  showEmails?: boolean;
}


export class GetAdminUsersListFlagJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin: boolean;

  @SpeakeasyMetadata({ data: "json, name=avatar_template" })
  avatarTemplate: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: string;

  @SpeakeasyMetadata({ data: "json, name=created_at_age" })
  createdAtAge: any;

  @SpeakeasyMetadata({ data: "json, name=days_visited" })
  daysVisited: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=flag_level" })
  flagLevel: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=last_emailed_age" })
  lastEmailedAge: any;

  @SpeakeasyMetadata({ data: "json, name=last_emailed_at" })
  lastEmailedAt: string;

  @SpeakeasyMetadata({ data: "json, name=last_seen_age" })
  lastSeenAge: any;

  @SpeakeasyMetadata({ data: "json, name=last_seen_at" })
  lastSeenAt: string;

  @SpeakeasyMetadata({ data: "json, name=manual_locked_trust_level" })
  manualLockedTrustLevel: string;

  @SpeakeasyMetadata({ data: "json, name=moderator" })
  moderator: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=post_count" })
  postCount: number;

  @SpeakeasyMetadata({ data: "json, name=posts_read_count" })
  postsReadCount: number;

  @SpeakeasyMetadata({ data: "json, name=secondary_emails" })
  secondaryEmails?: any[];

  @SpeakeasyMetadata({ data: "json, name=staged" })
  staged: boolean;

  @SpeakeasyMetadata({ data: "json, name=time_read" })
  timeRead: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=topics_entered" })
  topicsEntered: number;

  @SpeakeasyMetadata({ data: "json, name=trust_level" })
  trustLevel: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class GetAdminUsersListFlagJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAdminUsersListFlagJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAdminUsersListFlagJsonQueryParams;
}


export class GetAdminUsersListFlagJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: GetAdminUsersListFlagJson200ApplicationJson })
  getAdminUsersListFlagJson200ApplicationJsonObjects?: GetAdminUsersListFlagJson200ApplicationJson[];

  @SpeakeasyMetadata()
  statusCode: number;
}
