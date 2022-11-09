import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActivityMarkRepoNotificationsAsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivityMarkRepoNotificationsAsReadRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=last_read_at" })
  lastReadAt?: string;
}


export class ActivityMarkRepoNotificationsAsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityMarkRepoNotificationsAsReadPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActivityMarkRepoNotificationsAsReadRequestBody;
}


export class ActivityMarkRepoNotificationsAsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
