import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsListBlockedUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsListBlockedUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsListBlockedUsersPathParams;
}


export class OrgsListBlockedUsers415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class OrgsListBlockedUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  orgsListBlockedUsers415ApplicationJsonObject?: OrgsListBlockedUsers415ApplicationJson;

  @Metadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];
}
