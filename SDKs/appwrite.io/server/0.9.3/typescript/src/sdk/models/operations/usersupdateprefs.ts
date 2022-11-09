import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersUpdatePrefsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UsersUpdatePrefsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=prefs" })
  prefs: Map<string, any>;
}


export class UsersUpdatePrefsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class UsersUpdatePrefsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersUpdatePrefsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UsersUpdatePrefsRequestBody;

  @Metadata()
  security: UsersUpdatePrefsSecurity;
}


export class UsersUpdatePrefsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  preferences?: Map<string, any>;
}
