import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAdminUsersListFlagJsonFlagEnum {
    Active = "active"
,    New = "new"
,    Staff = "staff"
,    Suspended = "suspended"
,    Blocked = "blocked"
,    Suspect = "suspect"
}


export class GetAdminUsersListFlagJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=flag" })
  flag: GetAdminUsersListFlagJsonFlagEnum;
}

export enum GetAdminUsersListFlagJsonAscEnum {
    True = "true"
}

export enum GetAdminUsersListFlagJsonOrderEnum {
    Created = "created"
,    LastEmailed = "last_emailed"
,    Seen = "seen"
,    Username = "username"
,    Email = "email"
,    TrustLevel = "trust_level"
,    DaysVisited = "days_visited"
,    PostsRead = "posts_read"
,    TopicsViewed = "topics_viewed"
,    Posts = "posts"
,    ReadTime = "read_time"
}


export class GetAdminUsersListFlagJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=asc" })
  asc?: GetAdminUsersListFlagJsonAscEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetAdminUsersListFlagJsonOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=show_emails" })
  showEmails?: boolean;
}


export class GetAdminUsersListFlagJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAdminUsersListFlagJsonPathParams;

  @Metadata()
  queryParams: GetAdminUsersListFlagJsonQueryParams;
}


export class GetAdminUsersListFlagJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=admin" })
  admin: boolean;

  @Metadata({ data: "json, name=avatar_template" })
  avatarTemplate: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=created_at_age" })
  createdAtAge: any;

  @Metadata({ data: "json, name=days_visited" })
  daysVisited: number;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=flag_level" })
  flagLevel: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=last_emailed_age" })
  lastEmailedAge: any;

  @Metadata({ data: "json, name=last_emailed_at" })
  lastEmailedAt: string;

  @Metadata({ data: "json, name=last_seen_age" })
  lastSeenAge: any;

  @Metadata({ data: "json, name=last_seen_at" })
  lastSeenAt: string;

  @Metadata({ data: "json, name=manual_locked_trust_level" })
  manualLockedTrustLevel: string;

  @Metadata({ data: "json, name=moderator" })
  moderator: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=post_count" })
  postCount: number;

  @Metadata({ data: "json, name=posts_read_count" })
  postsReadCount: number;

  @Metadata({ data: "json, name=secondary_emails" })
  secondaryEmails?: any[];

  @Metadata({ data: "json, name=staged" })
  staged: boolean;

  @Metadata({ data: "json, name=time_read" })
  timeRead: number;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=topics_entered" })
  topicsEntered: number;

  @Metadata({ data: "json, name=trust_level" })
  trustLevel: number;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class GetAdminUsersListFlagJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: operations.GetAdminUsersListFlagJson200ApplicationJson })
  getAdminUsersListFlagJson200ApplicationJsonObjects?: GetAdminUsersListFlagJson200ApplicationJson[];

  @Metadata()
  statusCode: number;
}
