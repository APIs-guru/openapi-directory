import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersUpdateStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UsersUpdateStatusRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: number;
}


export class UsersUpdateStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class UsersUpdateStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersUpdateStatusPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UsersUpdateStatusRequestBody;

  @Metadata()
  security: UsersUpdateStatusSecurity;
}


export class UsersUpdateStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: shared.User;
}
