import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersDeleteSessionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UsersDeleteSessionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class UsersDeleteSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersDeleteSessionPathParams;

  @SpeakeasyMetadata()
  security: UsersDeleteSessionSecurity;
}


export class UsersDeleteSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
