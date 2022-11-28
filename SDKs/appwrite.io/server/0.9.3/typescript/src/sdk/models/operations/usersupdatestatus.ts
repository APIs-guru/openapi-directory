import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersUpdateStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UsersUpdateStatusRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class UsersUpdateStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class UsersUpdateStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersUpdateStatusPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UsersUpdateStatusRequestBody;

  @SpeakeasyMetadata()
  security: UsersUpdateStatusSecurity;
}


export class UsersUpdateStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;
}
