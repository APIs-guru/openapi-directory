import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum {
    Public = "public",
    Private = "private"
}


export class UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility: UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum;
}


export class UsersSetPrimaryEmailVisibilityForAuthenticatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody;
}


export class UsersSetPrimaryEmailVisibilityForAuthenticatedResponse extends SpeakeasyBase {
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
