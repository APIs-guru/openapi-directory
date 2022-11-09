import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersAddEmailForAuthenticatedRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=emails" })
  emails: string[];
}


export class UsersAddEmailForAuthenticatedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class UsersAddEmailForAuthenticatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Email })
  emails?: shared.Email[];

  @Metadata()
  validationError?: shared.ValidationError;
}
