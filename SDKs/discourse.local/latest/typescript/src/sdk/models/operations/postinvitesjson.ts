import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInvitesJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PostInvitesJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_message" })
  customMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=group_names" })
  groupNames?: string;

  @SpeakeasyMetadata({ data: "json, name=max_redemptions_allowed" })
  maxRedemptionsAllowed?: number;

  @SpeakeasyMetadata({ data: "json, name=skip_email" })
  skipEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=topic_id" })
  topicId?: number;
}


export class PostInvitesJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_message" })
  customMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=emailed" })
  emailed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expired" })
  expired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups?: any[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=topics" })
  topics?: any[];

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class PostInvitesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostInvitesJsonHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostInvitesJsonRequestBody;
}


export class PostInvitesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postInvitesJson200ApplicationJsonObject?: PostInvitesJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
