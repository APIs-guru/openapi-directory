import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersUpdatePrefsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UsersUpdatePrefsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prefs" })
  prefs: Map<string, any>;
}


export class UsersUpdatePrefsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class UsersUpdatePrefsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersUpdatePrefsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UsersUpdatePrefsRequestBody;

  @SpeakeasyMetadata()
  security: UsersUpdatePrefsSecurity;
}


export class UsersUpdatePrefsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  preferences?: Map<string, any>;
}
