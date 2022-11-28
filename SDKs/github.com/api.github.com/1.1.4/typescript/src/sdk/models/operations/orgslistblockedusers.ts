import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsListBlockedUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsListBlockedUsers415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class OrgsListBlockedUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsListBlockedUsersPathParams;
}


export class OrgsListBlockedUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  orgsListBlockedUsers415ApplicationJsonObject?: OrgsListBlockedUsers415ApplicationJson;

  @SpeakeasyMetadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];
}
