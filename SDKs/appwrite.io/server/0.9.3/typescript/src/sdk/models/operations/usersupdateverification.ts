import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersUpdateVerificationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UsersUpdateVerificationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailVerification" })
  emailVerification: boolean;
}


export class UsersUpdateVerificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class UsersUpdateVerificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersUpdateVerificationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UsersUpdateVerificationRequestBody;

  @SpeakeasyMetadata()
  security: UsersUpdateVerificationSecurity;
}


export class UsersUpdateVerificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;
}
