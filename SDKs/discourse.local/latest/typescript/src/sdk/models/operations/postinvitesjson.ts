import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInvitesJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PostInvitesJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_message" })
  customMessage?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @Metadata({ data: "json, name=group_id" })
  groupId?: number;

  @Metadata({ data: "json, name=group_names" })
  groupNames?: string;

  @Metadata({ data: "json, name=max_redemptions_allowed" })
  maxRedemptionsAllowed?: number;

  @Metadata({ data: "json, name=skip_email" })
  skipEmail?: boolean;

  @Metadata({ data: "json, name=topic_id" })
  topicId?: number;
}


export class PostInvitesJsonRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInvitesJsonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostInvitesJsonRequestBody;
}


export class PostInvitesJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=custom_message" })
  customMessage?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=emailed" })
  emailed?: boolean;

  @Metadata({ data: "json, name=expired" })
  expired?: boolean;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @Metadata({ data: "json, name=groups" })
  groups?: any[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=topics" })
  topics?: any[];

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class PostInvitesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postInvitesJson200ApplicationJsonObject?: PostInvitesJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
