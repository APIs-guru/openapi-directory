import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersAddEmailForAuthenticatedRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails: string[];
}


export class UsersAddEmailForAuthenticatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class UsersAddEmailForAuthenticatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.Email })
  emails?: shared.Email[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
