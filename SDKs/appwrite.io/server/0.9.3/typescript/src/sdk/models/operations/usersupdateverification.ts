import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersUpdateVerificationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UsersUpdateVerificationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailVerification" })
  emailVerification: boolean;
}


export class UsersUpdateVerificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class UsersUpdateVerificationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersUpdateVerificationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UsersUpdateVerificationRequestBody;

  @Metadata()
  security: UsersUpdateVerificationSecurity;
}


export class UsersUpdateVerificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: shared.User;
}
